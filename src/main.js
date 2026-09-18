const { app, BrowserWindow, ipcMain, dialog, shell, Menu, clipboard, Notification } = require("electron");
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");
const YTDlpWrap = require("yt-dlp-wrap").default || require("yt-dlp-wrap");
const { autoUpdater } = require("electron-updater");
let ffmpegPath = require("ffmpeg-static");
// Cuando el app esta empaquetado, ffmpeg-static vive dentro de app.asar
// y no se puede ejecutar desde ahi. asarUnpack (ver package.json) lo
// copia a app.asar.unpacked; aqui apuntamos la ruta a esa copia real.
if (app.isPackaged) {
  ffmpegPath = ffmpegPath.replace("app.asar", "app.asar.unpacked");
}

let ytDlpPath = path.join(app.getPath("userData"), "yt-dlp.exe");
let metaPath = path.join(app.getPath("userData"), "app-meta.json");
let mainWin = null;
const jobs = new Map(); // jobId -> {proc, canceled}

const YTDLP_CHECK_INTERVAL_MS = 5 * 24 * 60 * 60 * 1000; // 5 dias

function readMeta() {
  try { return JSON.parse(fs.readFileSync(metaPath, "utf-8")); } catch { return {}; }
}
function writeMeta(patch) {
  try { fs.writeFileSync(metaPath, JSON.stringify({ ...readMeta(), ...patch })); } catch {}
}

function extractYouTubeUrl(text) {
  if (!text) return null;
  const m = text.match(/https?:\/\/(www\.)?(youtube\.com\/(watch\?v=[\w-]+|shorts\/[\w-]+)|youtu\.be\/[\w-]+)\S*/i);
  return m ? m[0] : null;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 660, height: 760, minWidth: 560, minHeight: 620,
    backgroundColor:"#0a0c11",
    icon: path.join(__dirname, "icon.png"),
    frame:false,
    autoHideMenuBar:true,
    webPreferences:{preload:path.join(__dirname,"preload.js"),contextIsolation:true,nodeIntegration:false}
  });
  win.loadFile(path.join(__dirname,"index.html"));

  // Al abrir la app y cada vez que recupera el foco, si hay un link de YouTube
  // en el portapapeles y el usuario no ha escrito nada, lo pre-llenamos.
  const checkClipboard = () => {
    const link = extractYouTubeUrl(clipboard.readText());
    if (link) win.webContents.send("prefill-url", link);
  };
  win.webContents.on("did-finish-load", checkClipboard);
  win.on("focus", checkClipboard);

  const sendMaximizedState = () => {
    if (!win.isDestroyed()) win.webContents.send("win-maximized-state", win.isMaximized());
  };
  win.on("maximize", sendMaximizedState);
  win.on("unmaximize", sendMaximizedState);
  win.webContents.on("did-finish-load", sendMaximizedState);

  return win;
}

// Controles de la barra de titulo personalizada (la app usa frame:false).
ipcMain.on("win-minimize", event => {
  const w = BrowserWindow.fromWebContents(event.sender);
  if (w) w.minimize();
});
ipcMain.on("win-maximize-toggle", event => {
  const w = BrowserWindow.fromWebContents(event.sender);
  if (!w) return;
  if (w.isMaximized()) w.unmaximize(); else w.maximize();
});
ipcMain.on("win-close", event => {
  const w = BrowserWindow.fromWebContents(event.sender);
  if (w) w.close();
});
ipcMain.handle("win-is-maximized", event => {
  const w = BrowserWindow.fromWebContents(event.sender);
  return w ? w.isMaximized() : false;
});

async function ensureYtDlp() {
  if (fs.existsSync(ytDlpPath)) return ytDlpPath;
  await YTDlpWrap.downloadFromGithub(ytDlpPath);
  // Recien descargado: ya esta en la ultima version, no hace falta revisar de nuevo enseguida.
  writeMeta({ lastYtDlpCheck: Date.now() });
  return ytDlpPath;
}

async function getYtDlpVersion() {
  if (!fs.existsSync(ytDlpPath)) return null;
  return await new Promise(resolve => {
    const p = spawn(ytDlpPath, ["--version"], { windowsHide: true });
    let out = "";
    p.stdout.on("data", d => out += d);
    p.on("close", () => resolve(out.trim() || null));
    p.on("error", () => resolve(null));
  });
}

// Revisa (o fuerza) una actualizacion de yt-dlp descargando el ultimo release.
// yt-dlp se actualiza seguido porque YouTube cambia su sitio; una version vieja
// empieza a fallar con errores de extraccion.
async function updateYtDlp(force) {
  const meta = readMeta();
  const now = Date.now();
  if (!force && meta.lastYtDlpCheck && (now - meta.lastYtDlpCheck) < YTDLP_CHECK_INTERVAL_MS) {
    return { updated: false, checked: false, version: await getYtDlpVersion() };
  }
  const before = await getYtDlpVersion();
  await YTDlpWrap.downloadFromGithub(ytDlpPath);
  const after = await getYtDlpVersion();
  writeMeta({ lastYtDlpCheck: now });
  return { updated: before !== after, checked: true, version: after };
}

function parseProgress(line) {
  const m=line.match(/\[download\]\s+(\d+(?:\.\d+)?)%.*?of\s+~?\s*([0-9.]+\w+).*?at\s+([0-9.]+\w+).*?ETA\s+([0-9:]+)/);
  return m ? {percent:Number(m[1]),size:m[2],speed:m[3],eta:m[4]} : null;
}

// Traduce los errores tecnicos crudos de yt-dlp a un codigo reconocible,
// para que el renderer pueda mostrar un mensaje claro en vez del texto crudo.
function classifyError(raw) {
  const s = (raw || "").toLowerCase();
  if (/private video/.test(s)) return "private";
  if (/sign in to confirm (your age|you.?re not a bot)|age[- ]restrict/.test(s)) return "age";
  if (/video unavailable/.test(s)) return "unavailable";
  if (/removed by the uploader|account associated with this video has been terminated|copyright grounds/.test(s)) return "removed";
  if (/not available in your country|blocked it in your country|geo.?restrict/.test(s)) return "region";
  if (/members?-only|join this channel/.test(s)) return "members";
  if (/premieres in|this live event|live stream? (has not started|is offline)/.test(s)) return "live";
  if (/unable to extract|unsupported url|no video formats found|requested format is not available/.test(s)) return "extract";
  if (/getaddrinfo|enotfound|econnreset|network is unreachable|timed out|failed to establish a new connection/.test(s)) return "network";
  return null;
}
function friendlyError(raw, fallback) {
  return new Error(JSON.stringify({ code: classifyError(raw), raw: raw || fallback }));
}

const NOTIF_TEXT = {
  es: {
    doneTitle: "Descarga completada",
    doneBody: t => `"${t}" se descargó correctamente.`,
    errTitle: "Error en la descarga",
    errBody: "No se pudo completar la descarga."
  },
  en: {
    doneTitle: "Download complete",
    doneBody: t => `"${t}" downloaded successfully.`,
    errTitle: "Download error",
    errBody: "The download could not be completed."
  }
};
function notify(ok, lang, title) {
  if (!Notification.isSupported()) return;
  const l = NOTIF_TEXT[lang] || NOTIF_TEXT.es;
  new Notification({
    title: ok ? l.doneTitle : l.errTitle,
    body: ok ? l.doneBody(title || "") : l.errBody,
    icon: path.join(__dirname, "icon.png")
  }).show();
}

app.whenReady().then(()=>{
  Menu.setApplicationMenu(null);

  ipcMain.handle("choose-folder", async()=>{
    const r=await dialog.showOpenDialog({properties:["openDirectory"]});
    return r.canceled?null:r.filePaths[0];
  });
  ipcMain.handle("open-folder", async(_,folder)=>{ if(folder) await shell.openPath(folder); });

  ipcMain.handle("ytdlp-version", async()=> await getYtDlpVersion());
  ipcMain.handle("ytdlp-update", async(_, opts) => {
    await ensureYtDlp();
    return await updateYtDlp(!!(opts && opts.force));
  });

  ipcMain.handle("info", async(_,url)=>{
    const bin=await ensureYtDlp();
    return await new Promise((resolve,reject)=>{
      const p=spawn(bin,["--dump-single-json","--no-warnings","--no-playlist",url],{windowsHide:true});
      let out="",err="";
      p.stdout.on("data",d=>out+=d);
      p.stderr.on("data",d=>err+=d);
      p.on("close",code=>{
        if(code!==0) return reject(friendlyError(err,"No se pudo analizar el video."));
        try {
          const x=JSON.parse(out);
          // Excluimos formatos "storyboard" (miniaturas para la barra de progreso de YouTube):
          // vienen con vcodec "none", ext "mhtml" o protocolo "mhtml", y sus "height" no son
          // resoluciones de video reales (de ahi numeros como 2026p, 1350p, etc.)
          const videoFormats=(x.formats||[]).filter(f=>
            f.vcodec && f.vcodec!=="none" &&
            f.ext!=="mhtml" && f.protocol!=="mhtml" &&
            f.format_note!=="storyboard"
          );
          const heights=[...new Set(videoFormats.map(f=>Number(f.height)).filter(h=>h>0))].sort((a,b)=>b-a);
          const audio=[...new Set((x.formats||[]).map(f=>Math.round(Number(f.abr||f.tbr||0))).filter(x=>x>0))].sort((a,b)=>a-b);
          // Tamaño aproximado y ancho real por altura de video, para mostrarlo en el
          // cuadro de "elegir calidad" (estilo Freemake) antes de descargar.
          const sizeByHeight={},widthByHeight={};
          videoFormats.forEach(f=>{
            const h=Number(f.height); if(!h) return;
            const sz=Number(f.filesize||f.filesize_approx||0);
            if(sz && (!sizeByHeight[h] || sz>sizeByHeight[h])){ sizeByHeight[h]=sz; widthByHeight[h]=Number(f.width)||widthByHeight[h]||0; }
            else if(!widthByHeight[h] && f.width) widthByHeight[h]=Number(f.width);
          });
          let bestAudioSize=0;
          (x.formats||[]).forEach(f=>{
            if((!f.vcodec||f.vcodec==="none") && f.acodec && f.acodec!=="none"){
              const sz=Number(f.filesize||f.filesize_approx||0);
              if(sz>bestAudioSize) bestAudioSize=sz;
            }
          });
          const sizes={},widths={};
          heights.forEach(h=>{
            sizes[h]=sizeByHeight[h]?(sizeByHeight[h]+bestAudioSize):0;
            widths[h]=widthByHeight[h]||Math.round(h*16/9);
          });
          resolve({id:x.id,title:x.title||"Video",duration:x.duration||0,channel:x.channel||x.uploader||"",thumbnail:x.thumbnail||"",heights,audio,sizes,widths});
        } catch(e){reject(e)}
      });
    });
  });

  ipcMain.handle("playlist-info", async(_,url)=>{
    const bin=await ensureYtDlp();
    return await new Promise((resolve,reject)=>{
      // --flat-playlist es rapido: no analiza cada video individualmente,
      // solo lista los que contiene la playlist.
      const p=spawn(bin,["--flat-playlist","--dump-single-json","--no-warnings",url],{windowsHide:true});
      let out="",err="";
      p.stdout.on("data",d=>out+=d);
      p.stderr.on("data",d=>err+=d);
      p.on("close",code=>{
        if(code!==0) return reject(friendlyError(err,"No se pudo leer la playlist."));
        try{
          const x=JSON.parse(out);
          const entries=(x.entries||[]).map(e=>({
            id:e.id,
            title:e.title||e.id,
            duration:e.duration||0,
            url:e.url||(e.id?`https://www.youtube.com/watch?v=${e.id}`:null),
            thumbnail:e.id?`https://i.ytimg.com/vi/${e.id}/hqdefault.jpg`:""
          })).filter(e=>e.url);
          resolve({title:x.title||"Playlist",count:entries.length,entries});
        }catch(e){reject(e)}
      });
    });
  });

  ipcMain.handle("download", async(event,{url,folder,type,quality,bitrate,title,lang,jobId})=>{
    const bin=await ensureYtDlp();
    fs.mkdirSync(folder,{recursive:true});
    let args=["--no-playlist","--newline","--windows-filenames","-P",folder];
    if(type==="mp3"){
      args.push("-x","--audio-format","mp3","--audio-quality",`${bitrate}K`,"--ffmpeg-location",ffmpegPath,"-o","%(title)s.%(ext)s",url);
    } else {
      const q=Number(quality);
      args.push("-f",`bv*[height<=${q}][vcodec^=avc1]+ba[acodec^=mp4a]/bv*[height<=${q}]+ba/b[height<=${q}]/b`,"--merge-output-format","mp4","--ffmpeg-location",ffmpegPath,"-o","%(title)s.%(ext)s",url);
    }
    return await new Promise((resolve,reject)=>{
      const p=spawn(bin,args,{windowsHide:true});
      if(jobId) jobs.set(jobId,{proc:p,canceled:false});
      let destPath="";
      p.stdout.on("data",d=>{
        const line=d.toString();
        const prog=parseProgress(line);
        if(prog) event.sender.send("download-progress",prog);
        if(/has already been downloaded|100%/i.test(line)) event.sender.send("download-progress",{percent:100});
        const dMatch=line.match(/\[download\] Destination:\s*(.+)/);
        const mMatch=line.match(/\[Merger\] Merging formats into "(.+)"/);
        const eMatch=line.match(/\[ExtractAudio\] Destination:\s*(.+)/);
        if(dMatch) destPath=dMatch[1].trim();
        if(mMatch) destPath=mMatch[1].trim();
        if(eMatch) destPath=eMatch[1].trim();
      });
      let err="";
      p.stderr.on("data",d=>err+=d.toString());
      p.on("close",code=>{
        const job=jobId?jobs.get(jobId):null;
        const wasCanceled=job&&job.canceled;
        if(jobId) jobs.delete(jobId);
        if(wasCanceled){
          reject(new Error(JSON.stringify({code:"canceled",raw:"canceled by user"})));
        } else if(code===0){
          notify(true, lang, title);
          resolve({ok:true,folder,file:destPath||null});
        } else {
          notify(false, lang, title);
          reject(friendlyError(err,"La descarga falló."));
        }
      });
    });
  });

  ipcMain.handle("cancel-download", async(_,jobId)=>{
    const job=jobs.get(jobId);
    if(!job) return false;
    job.canceled=true;
    try{ job.proc.kill(); }catch{}
    return true;
  });

  ipcMain.handle("check-app-update", async()=>{
    if(!app.isPackaged) return {state:"dev"};
    try{ await autoUpdater.checkForUpdates(); return {state:"checking"}; }
    catch(e){ return {state:"error", message:String(e)}; }
  });
  ipcMain.handle("install-app-update", ()=>{ autoUpdater.quitAndInstall(); });

  autoUpdater.autoDownload=true;
  const sendUpdateStatus=payload=>{ if(mainWin) mainWin.webContents.send("app-update-status",payload); };
  autoUpdater.on("update-available", info=>sendUpdateStatus({state:"available",version:info.version}));
  autoUpdater.on("update-not-available", ()=>sendUpdateStatus({state:"none"}));
  autoUpdater.on("download-progress", p=>sendUpdateStatus({state:"downloading",percent:p.percent}));
  autoUpdater.on("update-downloaded", ()=>sendUpdateStatus({state:"ready"}));
  autoUpdater.on("error", e=>sendUpdateStatus({state:"error",message:String(e)}));

  mainWin = createWindow();
  app.on("activate",()=>{if(BrowserWindow.getAllWindows().length===0)mainWin=createWindow()});

  // Revision de actualizaciones de la app misma (no solo yt-dlp), en segundo
  // plano. Solo funciona con la app empaquetada/instalada y con "publish"
  // configurado en package.json (ver build.publish -> GitHub Releases).
  if(app.isPackaged){
    autoUpdater.checkForUpdates().catch(()=>{});
  }

  // Revision de actualizacion de yt-dlp en segundo plano, sin bloquear el arranque.
  // Si falla (ej. sin internet) no molesta al usuario; se reintenta en el proximo inicio.
  ensureYtDlp()
    .then(() => updateYtDlp(false))
    .then(r => { if (r.updated && mainWin) mainWin.webContents.send("ytdlp-auto-updated", r.version); })
    .catch(() => {});
});
app.on("window-all-closed",()=>{if(process.platform!=="darwin")app.quit()});
