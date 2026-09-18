const $=id=>document.getElementById(id);

const I18N={
 es:{
  brandTitle:"Descargador Videos Online YT",
  brandTag:"Video · Audio · HD · 4K",
  folderLabel:"Carpeta de descarga",
  folderNone:"No seleccionada",
  change:"Cambiar",
  open:"Abrir",
  languageLabel:"Idioma",
  themeLabel:"Tema",
  themeLight:"Blanco",
  heroTitle:"Descargar video",
  heroText:"Pega el enlace y detectamos automáticamente todas las calidades disponibles",
  urlPlaceholder:"Pega aquí el enlace de YouTube...",
  paste:"Pegar",
  analyze:"Analizar video",
  formatLabel:"Formato",
  qualityLabel:"Calidad",
  audioLabel:"Audio",
  formatMp4:"MP4 — Video",
  formatMp3:"MP3 — Audio",
  download:"↓ Descargar",
  durationPrefix:"Duración ",
  durationPlaceholder:"Duración —",
  channelPlaceholder:"Canal —",
  best:"Mejor disponible",
  msgInvalidUrl:"Pega una URL válida de YouTube.",
  msgAnalyzing:"Analizando video y buscando todas las calidades...",
  msgReady:n=>`Listo. ${n} resoluciones detectadas.`,
  msgError:m=>"Error: "+m,
  msgNeedFolder:"Primero selecciona una carpeta de descarga.",
  msgAddedToQueue:"Video agregado a la cola.",
  modalTitleDone:"Descarga completada",
  modalTextDone:"Tu video se guardó correctamente.",
  modalTitleError:"Error en la descarga",
  close:"Cerrar",
  updatesLabel:"Solucionar problemas",
  updatesCheckBtn:"Reparar descargas",
  updatesChecking:"Buscando actualización de yt-dlp...",
  updatesUpToDate:v=>v?`yt-dlp está al día (v${v}).`:"yt-dlp está al día.",
  updatesUpdated:v=>v?`Se actualizó yt-dlp a la versión v${v}.`:"Se actualizó yt-dlp a la última versión.",
  updatesError:"No se pudo comprobar actualizaciones. Revisa tu conexión.",
  updatesVersionUnknown:"Versión desconocida",
  helpLabel:"Ayuda",
  helpSmartscreenBtn:"¿Windows bloqueó la app?",
  smartscreenTitle:"Windows protegió tu PC",
  smartscreenText:"Como la app no tiene un certificado de firma digital (tiene costo comprarlo), Windows muestra esta advertencia la primera vez que se abre. Esto no significa que sea un virus.\n\nPara continuar:\n1. En la ventana azul, haz clic en \"Más información\".\n2. Luego aparecerá el botón \"Ejecutar de todas formas\". Haz clic ahí.\n\nSolo pasa la primera vez que se abre la app.",
  clipboardDetected:"Enlace detectado en el portapapeles.",
  playlistBtn:"📃 Ver playlist",
  playlistModalTitle:"Playlist",
  playlistModalCount:n=>`${n} videos encontrados`,
  playlistLoading:"Cargando videos de la playlist...",
  playlistError:"No se pudo leer la playlist.",
  playlistFormatLabel:"Formato",
  playlistQualityLabel:"Calidad",
  playlistAudioLabel:"Audio",
  playlistSelectAll:"Seleccionar todos",
  playlistDeselectAll:"Quitar selección",
  playlistAdd:n=>n>0?`Agregar ${n} a la cola`:"Agregar a la cola",
  playlistClose:"Cerrar",
  queueTitle:"Cola de descargas",
  qiPending:"En espera...",
  qiDownloading:p=>`Descargando... ${p}%`,
  qiDone:"✓ Completado",
  qiCanceled:"Cancelado",
  qiCancel:"Cancelar",
  qiRemove:"Quitar",
  qiRetry:"Reintentar",
  qiOpenFolder:"Mostrar en la carpeta",
  qiPlay:"Reproducir",
  menuArchivo:"Archivo",
  menuDescargas:"Descargas",
  menuAyuda:"Ayuda",
  queuePauseAll:"Pausar todos",
  queueResumeAll:"Reanudar todos",
  queueSpeedIdle:"Sin actividad",
  doQualityStep:"Elige la calidad",
  doActionStep:"Elige la acción",
  doActionDownload:"Solo descargar (MP4)",
  doActionMp3:"Convertir a MP3",
  doSaveLabel:"Guardar en",
  doConfirmDownload:"Descargar",
  doConfirmConvert:"Descargar y convertir",
  doEmptyQuality:"Se descargará con la mejor calidad disponible.",
  doQualityNote:"La calidad de video no aplica al convertir a MP3.",
  audioQ320:"Máxima calidad",
  audioQ256:"Alta calidad",
  audioQ192:"Calidad estándar",
  audioQ128:"Calidad básica",
  appUpdateLabel:"Actualización de la app",
  checkAppUpdateBtn:"Buscar actualización",
  installAppUpdateBtn:"Reiniciar e instalar",
  appUpdateDev:"No disponible en modo desarrollo.",
  appUpdateChecking:"Buscando actualización...",
  appUpdateNone:"Ya tienes la última versión.",
  appUpdateAvailable:v=>`Descargando actualización v${v}...`,
  appUpdateDownloading:p=>`Descargando actualización... ${p}%`,
  appUpdateReady:"Actualización lista. Reinicia para instalarla.",
  appUpdateError:"No se pudo buscar actualizaciones.",
  historyLabel:"Historial",
  openHistoryBtn:"Ver historial",
  historyTitle:"Historial de descargas",
  historyEmpty:"Todavía no has descargado nada.",
  historyRedownload:"Descargar de nuevo",
  historyClose:"Cerrar",
  errCodes:{
   private:"Este video es privado y no se puede descargar.",
   age:"Este video tiene restricción de edad y requiere iniciar sesión para verlo.",
   unavailable:"Este video ya no está disponible.",
   removed:"El video fue eliminado (por el usuario o por derechos de autor).",
   region:"Este video no está disponible en tu país o región.",
   members:"Este video es exclusivo para miembros del canal.",
   live:"Es una transmisión en vivo que aún no comenzó o ya terminó.",
   extract:"YouTube cambió algo en su sitio y yt-dlp no pudo leer el video. Prueba actualizar yt-dlp desde Configuración.",
   network:"No hay conexión a internet o el servidor no respondió.",
   canceled:"Descarga cancelada."
  }
 },
 en:{
  brandTitle:"Online Video Downloader YT",
  brandTag:"Video · Audio · HD · 4K",
  folderLabel:"Download folder",
  folderNone:"Not selected",
  change:"Change",
  open:"Open",
  languageLabel:"Language",
  themeLabel:"Theme",
  themeLight:"White",
  heroTitle:"Download video",
  heroText:"Paste the link and we'll automatically detect every available quality",
  urlPlaceholder:"Paste the YouTube link here...",
  paste:"Paste",
  analyze:"Analyze video",
  formatLabel:"Format",
  qualityLabel:"Quality",
  audioLabel:"Audio",
  formatMp4:"MP4 — Video",
  formatMp3:"MP3 — Audio",
  download:"↓ Download",
  durationPrefix:"Duration ",
  durationPlaceholder:"Duration —",
  channelPlaceholder:"Channel —",
  best:"Best available",
  msgInvalidUrl:"Paste a valid YouTube URL.",
  msgAnalyzing:"Analyzing video and looking for all qualities...",
  msgReady:n=>`Ready. ${n} resolutions detected.`,
  msgError:m=>"Error: "+m,
  msgNeedFolder:"First select a download folder.",
  msgAddedToQueue:"Video added to the queue.",
  modalTitleDone:"Download complete",
  modalTextDone:"Your video was saved successfully.",
  modalTitleError:"Download error",
  close:"Close",
  updatesLabel:"Troubleshoot",
  updatesCheckBtn:"Fix downloads",
  updatesChecking:"Checking for yt-dlp updates...",
  updatesUpToDate:v=>v?`yt-dlp is up to date (v${v}).`:"yt-dlp is up to date.",
  updatesUpdated:v=>v?`yt-dlp was updated to version v${v}.`:"yt-dlp was updated to the latest version.",
  updatesError:"Couldn't check for updates. Check your connection.",
  updatesVersionUnknown:"Unknown version",
  helpLabel:"Help",
  helpSmartscreenBtn:"Did Windows block the app?",
  smartscreenTitle:"Windows protected your PC",
  smartscreenText:"Since the app isn't digitally signed (that certificate costs money), Windows shows this warning the first time it opens. It doesn't mean it's a virus.\n\nTo continue:\n1. In the blue window, click \"More info\".\n2. The \"Run anyway\" button will appear. Click it.\n\nThis only happens the first time the app opens.",
  clipboardDetected:"YouTube link detected on the clipboard.",
  playlistBtn:"📃 View playlist",
  playlistModalTitle:"Playlist",
  playlistModalCount:n=>`${n} videos found`,
  playlistLoading:"Loading playlist videos...",
  playlistError:"Couldn't read the playlist.",
  playlistFormatLabel:"Format",
  playlistQualityLabel:"Quality",
  playlistAudioLabel:"Audio",
  playlistSelectAll:"Select all",
  playlistDeselectAll:"Deselect all",
  playlistAdd:n=>n>0?`Add ${n} to queue`:"Add to queue",
  playlistClose:"Close",
  queueTitle:"Download queue",
  qiPending:"Waiting...",
  qiDownloading:p=>`Downloading... ${p}%`,
  qiDone:"✓ Done",
  qiCanceled:"Canceled",
  qiCancel:"Cancel",
  qiRemove:"Remove",
  qiRetry:"Retry",
  qiOpenFolder:"Show in folder",
  qiPlay:"Play",
  menuArchivo:"File",
  menuDescargas:"Downloads",
  menuAyuda:"Help",
  queuePauseAll:"Pause all",
  queueResumeAll:"Resume all",
  queueSpeedIdle:"No activity",
  doQualityStep:"Choose the quality",
  doActionStep:"Choose the action",
  doActionDownload:"Just download (MP4)",
  doActionMp3:"Convert to MP3",
  doSaveLabel:"Save to",
  doConfirmDownload:"Download",
  doConfirmConvert:"Download and convert",
  doEmptyQuality:"It will download at the best quality available.",
  doQualityNote:"Video quality doesn't apply when converting to MP3.",
  audioQ320:"Maximum quality",
  audioQ256:"High quality",
  audioQ192:"Standard quality",
  audioQ128:"Basic quality",
  appUpdateLabel:"App update",
  checkAppUpdateBtn:"Check for update",
  installAppUpdateBtn:"Restart and install",
  appUpdateDev:"Not available in dev mode.",
  appUpdateChecking:"Checking for updates...",
  appUpdateNone:"You already have the latest version.",
  appUpdateAvailable:v=>`Downloading update v${v}...`,
  appUpdateDownloading:p=>`Downloading update... ${p}%`,
  appUpdateReady:"Update ready. Restart to install it.",
  appUpdateError:"Couldn't check for updates.",
  historyLabel:"History",
  openHistoryBtn:"View history",
  historyTitle:"Download history",
  historyEmpty:"You haven't downloaded anything yet.",
  historyRedownload:"Download again",
  historyClose:"Close",
  errCodes:{
   private:"This video is private and can't be downloaded.",
   age:"This video is age-restricted and requires signing in to watch.",
   unavailable:"This video is no longer available.",
   removed:"The video was removed (by the uploader or for copyright reasons).",
   region:"This video isn't available in your country or region.",
   members:"This video is exclusive to channel members.",
   live:"This is a live stream that hasn't started yet or has already ended.",
   extract:"YouTube changed something on their site and yt-dlp couldn't read the video. Try updating yt-dlp from Settings.",
   network:"No internet connection or the server didn't respond.",
   canceled:"Download canceled."
  }
 }
};

let lang=localStorage.getItem("app_lang")||"es";
let theme=localStorage.getItem("app_theme")||"dark";
let folder=localStorage.getItem("app_folder")||"";
let lastHeights=null;
let lastVideoInfo=null; // {url,title,duration,channel,thumbnail,heights,sizes,widths}
let queue=[]; // {id,url,type,quality,bitrate,title,thumbnail,duration,sizeLabel,status,percent,speed,error,file}
let activeJobId=null;
let paused=localStorage.getItem("app_paused")==="1";
let playlistEntries=[];

async function chooseFolderFlow(){
 const f=await window.desktopAPI.chooseFolder();
 if(f){
  folder=f;localStorage.setItem("app_folder",folder);
  $("doSavePath").textContent=f;
  applyLanguage();
 }
 return folder;
}

const t=key=>I18N[lang][key];

function applyLanguage(){
 document.documentElement.lang=lang;
 $("languageLabelText").textContent=t("languageLabel");
 $("themeLabelText").textContent=t("themeLabel");
 $("themeLight").textContent=t("themeLight");
 $("url").placeholder=t("urlPlaceholder");
 $("paste").textContent=t("paste");
 $("analyze").textContent=t("analyze");
 $("download").textContent=t("download");
 $("modalOpen").textContent=t("open");
 $("modalClose").textContent=t("close");
 $("updatesLabelText").textContent=t("updatesLabel");
 $("updateYtDlp").textContent=t("updatesCheckBtn");
 $("helpLabelText").textContent=t("helpLabel");
 $("helpSmartscreen").textContent=t("helpSmartscreenBtn");
 $("smartscreenTitle").textContent=t("smartscreenTitle");
 $("smartscreenText").textContent=t("smartscreenText");
 $("smartscreenClose").textContent=t("close");
 $("playlistBtn").textContent=t("playlistBtn");
 $("playlistModalTitle").textContent=t("playlistModalTitle");
 $("playlistFormatLabelText").textContent=t("playlistFormatLabel");
 $("playlistQualityLabelText").textContent=t("playlistQualityLabel");
 $("playlistAudioLabelText").textContent=t("playlistAudioLabel");
 $("playlistFormat").options[0].textContent=t("formatMp4");
 $("playlistFormat").options[1].textContent=t("formatMp3");
 $("playlistSelectAll").textContent=t("playlistSelectAll");
 $("playlistClose").textContent=t("playlistClose");
 $("queueTitle").textContent=t("queueTitle");
 $("appUpdateLabelText").textContent=t("appUpdateLabel");
 $("checkAppUpdate").textContent=t("checkAppUpdateBtn");
 $("installAppUpdate").textContent=t("installAppUpdateBtn");
 $("historyTitle").textContent=t("historyTitle");
 $("historyClose").textContent=t("historyClose");
 if(!lastHeights){$("duration").textContent=t("durationPlaceholder");$("channel").textContent=t("channelPlaceholder")}
 $("langEs").classList.toggle("active",lang==="es");
 $("langEn").classList.toggle("active",lang==="en");

 $("queuePauseAllBtn").textContent=paused?t("queueResumeAll"):t("queuePauseAll");
 if(!activeJobId) $("queueSpeedText").textContent=t("queueSpeedIdle");

 $("doQualityStepText").textContent=t("doQualityStep");
 $("doActionStepText").textContent=t("doActionStep");
 $("doActionDownloadText").textContent=t("doActionDownload");
 $("doActionMp3Text").textContent=t("doActionMp3");
 $("doSaveLabelText").textContent=t("doSaveLabel");
 $("doChangeFolder").textContent=t("change");
 $("doClose").textContent=t("close");
 $("doSavePath").textContent=folder||t("folderNone");
 updateDoConfirmLabel();

 renderQueue();
 updatePlaylistAddLabel();
}

function applyTheme(){
 document.documentElement.setAttribute("data-theme",theme);
 $("themeOriginal").classList.toggle("active",theme==="dark");
 $("themeLight").classList.toggle("active",theme==="light");
}

function hideModal(){$("modalOverlay").classList.add("hidden")}
$("modalClose").onclick=hideModal;
$("modalOverlay").onclick=e=>{if(e.target===$("modalOverlay"))hideModal()};

$("langEs").onclick=()=>{lang="es";localStorage.setItem("app_lang",lang);applyLanguage()};
$("langEn").onclick=()=>{lang="en";localStorage.setItem("app_lang",lang);applyLanguage()};
$("themeOriginal").onclick=()=>{theme="dark";localStorage.setItem("app_theme",theme);applyTheme()};
$("themeLight").onclick=()=>{theme="light";localStorage.setItem("app_theme",theme);applyTheme()};

function toggleSettingsPanel(show){
 const panel=$("settingsPanel");
 const isOpen=show!==undefined?show:panel.classList.contains("hidden");
 panel.classList.toggle("hidden",!isOpen);
 $("settingsOverlay").classList.toggle("hidden",!isOpen);
}
$("settingsBtn").onclick=e=>{e.stopPropagation();toggleSettingsPanel()};
$("settingsOverlay").onclick=()=>toggleSettingsPanel(false);
document.addEventListener("click",e=>{
 if(!$("settingsPanel").classList.contains("hidden") && !$("settingsPanel").contains(e.target) && e.target!==$("settingsBtn")) toggleSettingsPanel(false);
});

function valid(u){try{let x=new URL(u);return x.hostname.includes("youtube.com")||x.hostname.includes("youtu.be")}catch{return false}}
function isPlaylistUrl(u){return /[?&]list=/.test(u)}

// Los errores que llegan del proceso principal vienen como JSON {code, raw}
// (ver classifyError en main.js) para poder mostrar un mensaje claro segun el idioma.
function parseErr(e){ try{ return JSON.parse(e.message) }catch{ return {code:null, raw:e.message} } }
function friendlyError(e){
 const o=parseErr(e);
 if(o.code && I18N[lang].errCodes[o.code]) return I18N[lang].errCodes[o.code];
 return t("msgError")(o.raw||e.message);
}
$("paste").onclick=async()=>{try{$("url").value=await navigator.clipboard.readText()}catch{}};
$("playlistFormat").onchange=()=>{const mp3=$("playlistFormat").value==="mp3";$("playlistQualityWrap").classList.toggle("hidden",mp3);$("playlistBitrateWrap").classList.toggle("hidden",!mp3)};
function fmt(s){if(!s)return"—";let m=Math.floor(s/60),sec=Math.floor(s%60);return `${m}:${String(sec).padStart(2,"0")}`}

// Enter en el campo de URL = analizar (si hay un resultado ya cargado no molesta, solo re-analiza)
$("url").addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); $("analyze").click(); } });
$("url").addEventListener("input",()=>{ $("playlistBtn").classList.toggle("hidden", !isPlaylistUrl($("url").value)); });

// Algunos videos no estan en proporcion 16:9 exacta (ej. "visualizers" con
// bordes recortados), asi que YouTube entrega alturas reales que no calzan
// con los numeros "de siempre" (1012p en vez de 1080p, 676p en vez de 720p,
// etc), aunque el propio YouTube los siga mostrando como "1080p HD" en su
// menu. Igualamos ese comportamiento: mostramos la etiqueta estandar mas
// cercana (igual que YouTube) pero descargamos usando la altura real.
const STANDARD_HEIGHTS=[4320,2160,1440,1080,720,480,360,240,144];
const STANDARD_TAG={4320:"8K",2160:"4K",1440:"HD",1080:"HD"};
function nearestStandard(h){
 let best=STANDARD_HEIGHTS[0],bestDiff=Infinity;
 for(const s of STANDARD_HEIGHTS){const diff=Math.abs(Math.log(h/s));if(diff<bestDiff){bestDiff=diff;best=s}}
 return best;
}
function buildQualityRows(x){
 const heights=(x.heights||[]).slice().sort((a,b)=>b-a);
 const seen=new Set();
 const rows=[];
 heights.forEach(h=>{
  const nearest=nearestStandard(h),ratio=h/nearest,tag=STANDARD_TAG[nearest];
  const label=(ratio>0.85&&ratio<1.15)?(seen.has(nearest)?null:(seen.add(nearest),(tag?`${nearest}p ${tag}`:`${nearest}p`))):(h+"p");
  if(label===null) return;
  const w=(x.widths&&x.widths[h])?x.widths[h]:Math.round(h*16/9);
  const bytes=(x.sizes&&x.sizes[h])?x.sizes[h]:0;
  rows.push({value:h,label,dim:`${w}×${h}`,sizeLabel:bytes?humanSize(bytes):"—"});
 });
 return rows;
}
function humanSize(bytes){
 if(!bytes) return "—";
 if(bytes>=1e9) return (bytes/1e9).toFixed(2)+" GB";
 return Math.max(1,Math.round(bytes/1e6))+" MB";
}
function estimateMp3Size(kbps,durationSec){
 if(!kbps||!durationSec) return 0;
 return Math.round((kbps*1000/8)*durationSec);
}
const AUDIO_BITRATES=[320,256,192,128];
function buildAudioRows(x){
 return AUDIO_BITRATES.map(kbps=>({
  value:kbps,
  label:kbps+" kbps",
  dim:t("audioQ"+kbps),
  sizeLabel:humanSize(estimateMp3Size(kbps,x.duration))
 }));
}
function platformIcon(url){
 if(/facebook\.com/i.test(url)) return "📘";
 if(/vimeo\.com/i.test(url)) return "🎬";
 if(/dailymotion\.com/i.test(url)) return "📀";
 if(/instagram\.com/i.test(url)) return "📷";
 if(/tiktok\.com/i.test(url)) return "🎵";
 return "▶";
}

$("analyze").onclick=async()=>{
 const u=$("url").value.trim();if(!valid(u)){ $("status").textContent=t("msgInvalidUrl");return}
 $("status").textContent=t("msgAnalyzing");
 try{
  const x=await window.desktopAPI.getInfo(u);
  lastHeights=x.heights;
  lastVideoInfo={url:u,title:x.title,duration:x.duration,channel:x.channel,thumbnail:x.thumbnail,heights:x.heights,sizes:x.sizes,widths:x.widths};
  $("result").classList.remove("hidden");$("title").textContent=x.title;$("duration").textContent=t("durationPrefix")+fmt(x.duration);$("channel").textContent=x.channel||"";
  if(x.thumbnail){$("thumbnail").src=x.thumbnail;$("thumbnail").style.display="block";$("ph").style.display="none"}
  $("status").textContent=t("msgReady")(x.heights.length);
  $("url").value="";
  $("playlistBtn").classList.add("hidden");
 }catch(e){$("status").textContent=friendlyError(e)}
};

/* ===================== Cola de descargas ===================== */

function addToQueue(item){
 item.id=item.id||(Date.now()+"-"+Math.random().toString(36).slice(2));
 item.status="pending";item.percent=0;
 queue.push(item);
 renderQueue();
 processQueue();
}

function qiStatusText(item){
 if(item.status==="pending") return t("qiPending");
 if(item.status==="downloading") return t("qiDownloading")(Math.round(item.percent||0))+(item.speed?" • "+item.speed:"");
 if(item.status==="done") return t("qiDone");
 if(item.status==="canceled") return t("qiCanceled");
 if(item.status==="error") return item.error||t("msgError")("");
 return "";
}

function qiMetaLine(item){
 const parts=[];
 if(item.duration) parts.push(fmt(item.duration));
 parts.push(item.sizeLabel||"—");
 parts.push(item.type==="mp3"?"MP3":"MP4");
 return parts.join("   ");
}

function renderQueue(){
 $("queueSection").classList.toggle("hidden", queue.length===0);
 if(queue.some(i=>i.status==="downloading")) toggleSettingsPanel(false);
 const list=$("queueList");
 list.innerHTML="";
 queue.forEach(item=>{
  const row=document.createElement("div");
  row.className="queue-item"+(item.status==="error"?" is-error":item.status==="done"?" is-done":"");

  const thumbWrap=document.createElement("div");
  thumbWrap.className="qi-thumb-wrap";
  const img=document.createElement("img");
  img.src=item.thumbnail||"icon.png";
  thumbWrap.appendChild(img);
  const badge=document.createElement("span");
  badge.className="qi-platform-badge";badge.textContent=platformIcon(item.url||"");
  thumbWrap.appendChild(badge);
  row.appendChild(thumbWrap);

  const main=document.createElement("div");
  main.className="qi-main";
  const title=document.createElement("div");
  title.className="qi-title";title.textContent=item.title||item.url;
  main.appendChild(title);

  if(item.status==="downloading"){
   const prog=document.createElement("div");prog.className="qi-progress";
   const bar=document.createElement("div");bar.style.width=(item.percent||0)+"%";
   prog.appendChild(bar);main.appendChild(prog);
   const status=document.createElement("div");
   status.className="qi-status";status.textContent=qiStatusText(item);
   main.appendChild(status);
  } else if(item.status==="done"){
   const meta=document.createElement("div");meta.className="qi-meta";meta.textContent=qiMetaLine(item);main.appendChild(meta);
  } else {
   const status=document.createElement("div");
   status.className="qi-status";status.textContent=qiStatusText(item);
   main.appendChild(status);
  }
  row.appendChild(main);

  const actions=document.createElement("div");
  actions.className="qi-actions";
  if(item.status==="downloading"){
   const cancelBtn=document.createElement("button");
   cancelBtn.className="qi-icon-btn";
   cancelBtn.textContent="✕";cancelBtn.title=t("qiCancel");
   cancelBtn.onclick=()=>window.desktopAPI.cancelDownload(item.id);
   actions.appendChild(cancelBtn);
  } else if(item.status==="pending"){
   const removeBtn=document.createElement("button");
   removeBtn.className="qi-icon-btn";
   removeBtn.textContent="✕";removeBtn.title=t("qiRemove");
   removeBtn.onclick=()=>{queue=queue.filter(i=>i.id!==item.id);renderQueue()};
   actions.appendChild(removeBtn);
  } else if(item.status==="error"||item.status==="canceled"){
   const retryBtn=document.createElement("button");
   retryBtn.className="qi-icon-btn";
   retryBtn.textContent="↻";retryBtn.title=t("qiRetry");
   retryBtn.onclick=()=>{item.status="pending";item.error=null;renderQueue();processQueue()};
   actions.appendChild(retryBtn);
   const removeBtn=document.createElement("button");
   removeBtn.className="qi-icon-btn";
   removeBtn.textContent="✕";removeBtn.title=t("qiRemove");
   removeBtn.onclick=()=>{queue=queue.filter(i=>i.id!==item.id);renderQueue()};
   actions.appendChild(removeBtn);
  } else if(item.status==="done"){
   const openLink=document.createElement("button");
   openLink.className="qi-link-btn";
   openLink.textContent=t("qiOpenFolder");
   openLink.onclick=()=>window.desktopAPI.openFolder(item.folder||folder);
   actions.appendChild(openLink);
   const playLink=document.createElement("button");
   playLink.className="qi-link-btn";
   playLink.textContent=t("qiPlay");
   playLink.onclick=()=>window.desktopAPI.openFolder(item.file||item.folder||folder);
   actions.appendChild(playLink);
   const removeBtn=document.createElement("button");
   removeBtn.className="qi-icon-btn";
   removeBtn.textContent="✕";removeBtn.title=t("qiRemove");
   removeBtn.onclick=()=>{queue=queue.filter(i=>i.id!==item.id);renderQueue()};
   actions.appendChild(removeBtn);
  }
  row.appendChild(actions);
  list.appendChild(row);
 });
}

async function processQueue(){
 if(activeJobId || paused) return;
 const next=queue.find(i=>i.status==="pending");
 if(!next) return;
 if(!folder){ next.status="error"; next.error=t("msgNeedFolder"); renderQueue(); return; }
 next.status="downloading";next.percent=0;activeJobId=next.id;renderQueue();
 try{
  const res=await window.desktopAPI.download({url:next.url,folder,type:next.type,quality:next.quality,bitrate:next.bitrate,title:next.title,lang,jobId:next.id});
  next.status="done";next.folder=folder;next.file=res&&res.file;
  addHistory(next);
 }catch(e){
  const o=parseErr(e);
  if(o.code==="canceled"){ next.status="canceled"; }
  else { next.status="error"; next.error=friendlyError(e); }
 }
 activeJobId=null;
 $("queueSpeedText").textContent=t("queueSpeedIdle");
 renderQueue();
 processQueue();
}

window.desktopAPI.onProgress(p=>{
 if(!activeJobId) return;
 const item=queue.find(i=>i.id===activeJobId);
 if(!item) return;
 if(p.percent!=null) item.percent=p.percent;
 if(p.speed){ item.speed=p.speed; $("queueSpeedText").textContent=p.speed; }
 renderQueue();
});

/* ===================== Pausar / reanudar todas las descargas ===================== */
$("queuePauseAllBtn").onclick=()=>{
 paused=!paused;
 localStorage.setItem("app_paused",paused?"1":"0");
 $("queuePauseAllBtn").textContent=paused?t("queueResumeAll"):t("queuePauseAll");
 if(!paused) processQueue();
};

/* ===================== Interruptor de "mejor calidad automática" ===================== */
$("autoBest").checked=localStorage.getItem("app_autobest")!=="0";
$("autoBest").onchange=()=>{ localStorage.setItem("app_autobest",$("autoBest").checked?"1":"0") };

function currentThumb(){ return $("thumbnail").src&&$("thumbnail").style.display!=="none"?$("thumbnail").src:"" }

function finishSingleDownload(){
 $("status").textContent=t("msgAddedToQueue");
 $("url").value="";$("result").classList.add("hidden");$("playlistBtn").classList.add("hidden");
 lastHeights=null;lastVideoInfo=null;
}

$("download").onclick=()=>{
 if(!lastVideoInfo){return}
 openDownloadOptions();
};

/* ===================== Cuadro "elegir calidad" antes de descargar (estilo Freemake) ===================== */
function updateDoConfirmLabel(){
 const action=document.querySelector('input[name=doAction]:checked');
 $("doConfirm").textContent=(action&&action.value==="mp3")?t("doConfirmConvert"):t("doConfirmDownload");
}
function renderDoQualityList(mode){
 // mode: "mp3" muestra las calidades de audio (bitrate), cualquier otro valor muestra las calidades de video.
 if(!lastVideoInfo) return;
 const x=lastVideoInfo;
 const isMp3=mode==="mp3";
 const rows=isMp3?buildAudioRows(x):buildQualityRows(x);
 const badge=isMp3?"MP3":"MP4";
 const list=$("doQualityList");list.innerHTML="";
 if(!rows.length){
  const empty=document.createElement("div");empty.className="do-empty";empty.textContent=t("doEmptyQuality");
  list.appendChild(empty);
  return;
 }
 rows.forEach((r,i)=>{
  const row=document.createElement("label");row.className="do-quality-row";
  row.innerHTML=`<input type="radio" name="doQuality" value="${r.value}" ${i===0?"checked":""}>
   <span class="do-badge">${badge}</span>
   <span class="do-res">${r.label}</span>
   <span class="do-dim">${r.dim}</span>
   <span class="do-size">${r.sizeLabel}</span>`;
  list.appendChild(row);
 });
}
function openDownloadOptions(){
 if(!lastVideoInfo) return;
 const x=lastVideoInfo;
 $("doThumb").src=x.thumbnail||"icon.png";
 $("doTitle").textContent=x.title;
 $("doDuration").textContent=fmt(x.duration);
 $("doSavePath").textContent=folder||t("folderNone");

 document.querySelector('input[name=doAction][value=download]').checked=true;
 renderDoQualityList("download");
 updateDoConfirmLabel();
 $("downloadOptionsOverlay").classList.remove("hidden");
}
document.querySelectorAll('input[name=doAction]').forEach(r=>{
 r.onchange=()=>{
  if(!r.checked) return;
  renderDoQualityList(r.value);
  updateDoConfirmLabel();
 };
});
$("doChangeFolder").onclick=async()=>{ await chooseFolderFlow(); $("doSavePath").textContent=folder||t("folderNone"); };
$("doClose").onclick=()=>$("downloadOptionsOverlay").classList.add("hidden");
$("downloadOptionsOverlay").onclick=e=>{if(e.target===$("downloadOptionsOverlay"))$("downloadOptionsOverlay").classList.add("hidden")};
$("doConfirm").onclick=async()=>{
 if(!lastVideoInfo) return;
 if(!folder){ const f=await chooseFolderFlow(); if(!f) return; }
 const action=document.querySelector('input[name=doAction]:checked').value;
 const qEl=document.querySelector('input[name=doQuality]:checked');
 const type=action==="mp3"?"mp3":"mp4";
 let quality,bitrate,sizeLabel;
 if(type==="mp3"){
  bitrate=qEl?qEl.value:"192";
  quality=lastVideoInfo.heights&&lastVideoInfo.heights.length?Math.max(...lastVideoInfo.heights):0;
  sizeLabel=humanSize(estimateMp3Size(Number(bitrate),lastVideoInfo.duration));
 } else {
  quality=qEl?qEl.value:(lastVideoInfo.heights&&lastVideoInfo.heights.length?Math.max(...lastVideoInfo.heights):0);
  bitrate="192";
  const bytes=(lastVideoInfo.sizes&&lastVideoInfo.sizes[quality])?lastVideoInfo.sizes[quality]:0;
  sizeLabel=humanSize(bytes);
 }
 addToQueue({url:lastVideoInfo.url,type,quality,bitrate,title:lastVideoInfo.title,thumbnail:currentThumb(),duration:lastVideoInfo.duration,sizeLabel});
 $("downloadOptionsOverlay").classList.add("hidden");
 finishSingleDownload();
};

/* ===================== Playlist ===================== */

$("playlistBtn").onclick=async()=>{
 const u=$("url").value.trim();
 if(!isPlaylistUrl(u)) return;
 $("playlistOverlay").classList.remove("hidden");
 $("playlistModalCount").textContent=t("playlistLoading");
 $("playlistItems").innerHTML="";
 try{
  const r=await window.desktopAPI.getPlaylistInfo(u);
  playlistEntries=r.entries;
  $("playlistModalTitle").textContent=r.title||t("playlistModalTitle");
  $("playlistModalCount").textContent=t("playlistModalCount")(r.count);
  const box=$("playlistItems");
  box.innerHTML="";
  playlistEntries.forEach((e,idx)=>{
   const row=document.createElement("label");
   row.className="playlist-item";
   const cb=document.createElement("input");
   cb.type="checkbox";cb.checked=true;cb.dataset.idx=idx;
   cb.onchange=updatePlaylistAddLabel;
   row.appendChild(cb);
   const img=document.createElement("img");img.src=e.thumbnail||"icon.png";row.appendChild(img);
   const ti=document.createElement("span");ti.className="pl-title";ti.textContent=e.title;row.appendChild(ti);
   box.appendChild(row);
  });
  updatePlaylistAddLabel();
 }catch(e){
  $("playlistModalCount").textContent=friendlyError(e);
 }
};
function playlistCheckboxes(){ return [...$("playlistItems").querySelectorAll("input[type=checkbox]")] }
function updatePlaylistAddLabel(){
 const n=playlistCheckboxes().filter(c=>c.checked).length;
 $("playlistAdd").textContent=t("playlistAdd")(n);
}
$("playlistSelectAll").onclick=()=>{
 const boxes=playlistCheckboxes();
 const allChecked=boxes.every(c=>c.checked);
 boxes.forEach(c=>c.checked=!allChecked);
 $("playlistSelectAll").textContent=allChecked?t("playlistSelectAll"):t("playlistDeselectAll");
 updatePlaylistAddLabel();
};
$("playlistAdd").onclick=()=>{
 const type=$("playlistFormat").value,quality=$("playlistQuality").value,bitrate=$("playlistBitrate").value;
 playlistCheckboxes().filter(c=>c.checked).forEach(c=>{
  const e=playlistEntries[Number(c.dataset.idx)];
  if(!e) return;
  addToQueue({url:e.url,type,quality,bitrate,title:e.title,thumbnail:e.thumbnail,duration:e.duration,sizeLabel:"—"});
 });
 $("playlistOverlay").classList.add("hidden");
 $("url").value="";$("playlistBtn").classList.add("hidden");
 $("status").textContent=t("msgAddedToQueue");
};
$("playlistClose").onclick=()=>$("playlistOverlay").classList.add("hidden");
$("playlistOverlay").onclick=e=>{if(e.target===$("playlistOverlay"))$("playlistOverlay").classList.add("hidden")};

/* ===================== Actualizaciones de yt-dlp ===================== */
async function refreshYtDlpVersion(){
 const v=await window.desktopAPI.getYtDlpVersion();
 $("ytdlpVersion").textContent=v?`v${v}`:t("updatesVersionUnknown");
}
$("updateYtDlp").onclick=async()=>{
 $("updateYtDlp").disabled=true;$("updateStatus").textContent=t("updatesChecking");
 try{
  const r=await window.desktopAPI.updateYtDlp(true);
  await refreshYtDlpVersion();
  $("updateStatus").textContent=r.updated?t("updatesUpdated")(r.version):t("updatesUpToDate")(r.version);
 }catch(e){
  $("updateStatus").textContent=t("updatesError");
 }
 finally{$("updateYtDlp").disabled=false}
};
window.desktopAPI.onYtDlpAutoUpdated(async()=>{ await refreshYtDlpVersion() });

/* ===================== Actualización de la app (electron-updater) ===================== */
$("checkAppUpdate").onclick=async()=>{
 $("checkAppUpdate").disabled=true;$("appUpdateStatus").textContent=t("appUpdateChecking");
 const r=await window.desktopAPI.checkAppUpdate();
 if(r.state==="dev") $("appUpdateStatus").textContent=t("appUpdateDev");
 else if(r.state==="error") $("appUpdateStatus").textContent=t("appUpdateError");
 $("checkAppUpdate").disabled=false;
};
$("installAppUpdate").onclick=()=>window.desktopAPI.installAppUpdate();
window.desktopAPI.onAppUpdateStatus(s=>{
 if(s.state==="available") $("appUpdateStatus").textContent=t("appUpdateAvailable")(s.version);
 else if(s.state==="none") $("appUpdateStatus").textContent=t("appUpdateNone");
 else if(s.state==="downloading") $("appUpdateStatus").textContent=t("appUpdateDownloading")(Math.round(s.percent||0));
 else if(s.state==="ready"){ $("appUpdateStatus").textContent=t("appUpdateReady"); $("installAppUpdate").classList.remove("hidden"); }
 else if(s.state==="error") $("appUpdateStatus").textContent=t("appUpdateError");
});

/* ===================== Ayuda: aviso de Windows SmartScreen ===================== */
$("helpSmartscreen").onclick=()=>{toggleSettingsPanel(false);$("smartscreenOverlay").classList.remove("hidden")};
$("smartscreenClose").onclick=()=>$("smartscreenOverlay").classList.add("hidden");
$("smartscreenOverlay").onclick=e=>{if(e.target===$("smartscreenOverlay"))$("smartscreenOverlay").classList.add("hidden")};

/* ===================== Historial ===================== */
function loadHistory(){ try{ return JSON.parse(localStorage.getItem("app_history")||"[]") }catch{ return [] } }
function saveHistory(h){ try{ localStorage.setItem("app_history", JSON.stringify(h.slice(0,50))) }catch{} }
function addHistory(item){
 const h=loadHistory();
 h.unshift({title:item.title,url:item.url,type:item.type,quality:item.quality,bitrate:item.bitrate,thumbnail:item.thumbnail,folder:item.folder,duration:item.duration,file:item.file,date:Date.now()});
 saveHistory(h);
}
function renderHistory(){
 const h=loadHistory();
 const list=$("historyList");
 list.innerHTML="";
 if(!h.length){ const empty=document.createElement("div");empty.className="history-empty";empty.textContent=t("historyEmpty");list.appendChild(empty);return }
 h.forEach(rec=>{
  const row=document.createElement("div");row.className="history-item";
  const title=document.createElement("div");title.className="hi-title";title.textContent=rec.title||rec.url;row.appendChild(title);
  const meta=document.createElement("div");meta.className="hi-meta";
  meta.textContent=new Date(rec.date).toLocaleString(lang==="es"?"es-ES":"en-US");
  row.appendChild(meta);
  const actions=document.createElement("div");actions.className="hi-actions";
  const openBtn=document.createElement("button");openBtn.className="ghost-btn";openBtn.textContent=t("qiOpenFolder");
  openBtn.onclick=()=>window.desktopAPI.openFolder(rec.folder||folder);
  actions.appendChild(openBtn);
  const redoBtn=document.createElement("button");redoBtn.className="ghost-btn";redoBtn.textContent=t("historyRedownload");
  redoBtn.onclick=()=>{ addToQueue({url:rec.url,type:rec.type,quality:rec.quality,bitrate:rec.bitrate,title:rec.title,thumbnail:rec.thumbnail,duration:rec.duration,sizeLabel:"—"}); $("historyOverlay").classList.add("hidden"); };
  actions.appendChild(redoBtn);
  row.appendChild(actions);
  list.appendChild(row);
 });
}
$("historyClose").onclick=()=>$("historyOverlay").classList.add("hidden");
$("historyOverlay").onclick=e=>{if(e.target===$("historyOverlay"))$("historyOverlay").classList.add("hidden")};

/* ===================== Detecta un link de YouTube en el portapapeles ===================== */
window.desktopAPI.onPrefillUrl(link=>{
 if(!$("url").value.trim()){
  $("url").value=link;
  $("status").textContent=t("clipboardDetected");
  $("playlistBtn").classList.toggle("hidden", !isPlaylistUrl(link));
 }
});

/* ===================== Controles personalizados de la ventana ===================== */
$("winMinimize").onclick=()=>window.desktopAPI.winMinimize();
$("winMaximize").onclick=()=>window.desktopAPI.winMaximizeToggle();
$("winClose").onclick=()=>window.desktopAPI.winClose();

function setMaximizedIcon(isMax){
 $("winMaximize").classList.toggle("is-restore", !!isMax);
 $("winMaximize").title = isMax ? (lang==="es"?"Restaurar":"Restore") : (lang==="es"?"Maximizar":"Maximize");
}
window.desktopAPI.winIsMaximized().then(setMaximizedIcon);
window.desktopAPI.onWinMaximizedState(setMaximizedIcon);

applyLanguage();
applyTheme();
refreshYtDlpVersion();
