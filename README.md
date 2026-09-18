<p align="center">
  <img src="src/icon.png" alt="Descargador Videos Online YT" width="150">
</p>

<h1 align="center">Descargador Videos Online YT</h1>

<p align="center"><strong>Descarga, convierte y gestiona contenido de YouTube desde Windows con una interfaz moderna, rápida y sencilla.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/Windows-Electron-47848F?style=for-the-badge&logo=electron&logoColor=white">
  <img src="https://img.shields.io/badge/yt--dlp-powered-FF0000?style=for-the-badge">
  <img src="https://img.shields.io/badge/FFmpeg-enabled-007808?style=for-the-badge&logo=ffmpeg&logoColor=white">
</p>

---

## ✨ ¿Qué es?

**Descargador Videos Online YT** es una aplicación de escritorio para Windows desarrollada con **Electron**. Está pensada para ofrecer una experiencia sencilla para analizar enlaces de YouTube, seleccionar formato y calidad, gestionar varias descargas y convertir contenido multimedia.

El proyecto utiliza **yt-dlp** como motor de extracción y descarga y **FFmpeg** para combinar streams de video/audio y realizar conversiones a MP3.

> **Uso responsable:** descarga únicamente contenido que tengas derecho a utilizar y respeta los derechos de autor, las leyes aplicables y las condiciones de uso de las plataformas.

## 🚀 Características

- 🎬 Descarga de videos en **MP4**.
- 🎵 Descarga y conversión de audio a **MP3**.
- 🖥️ Selección de calidad y formato.
- 📋 Detección de enlaces de YouTube desde el portapapeles.
- 🔗 Compatibilidad con videos, Shorts y enlaces abreviados de YouTube.
- 📑 Soporte para **playlists** y selección de elementos.
- 📥 **Cola de descargas** para gestionar varios contenidos.
- 📊 Progreso, velocidad y estado de las descargas.
- ⏹️ Cancelación de descargas en curso.
- 🔄 Reintento de descargas que hayan fallado.
- 🕘 Historial de descargas almacenado localmente.
- ⚡ Actualización de **yt-dlp**.
- 🔄 Actualizaciones automáticas de la aplicación mediante **GitHub Releases**.
- 🌙 Temas de interfaz.
- 🌎 Interfaz preparada para español e inglés.
- 🪟 Instalador nativo para Windows.

## 🧩 Flujo de trabajo

**Enlace de YouTube → análisis → selección de formato/calidad → yt-dlp → FFmpeg → archivo final**

Cuando video y audio están disponibles por separado, FFmpeg puede encargarse de combinarlos. Para MP3, FFmpeg realiza el procesamiento y conversión del audio.

## 🛠️ Tecnologías

| Tecnología | Función |
|---|---|
| **Electron** | Aplicación de escritorio |
| **HTML / CSS / JavaScript** | Interfaz y lógica |
| **yt-dlp** | Extracción y descarga |
| **FFmpeg** | Procesamiento multimedia |
| **electron-builder** | Generación del instalador |
| **electron-updater** | Actualizaciones automáticas |
| **GitHub Actions** | Automatización de builds y releases |

## 📦 Instalación para desarrollo

Requisitos:

- Windows
- Node.js + npm
- Git

Clona el proyecto:

```bash
git clone https://github.com/bryanlopezvr/Descargador-Online-Youtube.git
cd Descargador-Online-Youtube
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicación:

```bash
npm start
```

## 🏗️ Generar el instalador

```bash
npm run dist
```

El instalador se genera en:

```text
dist/
```

El proyecto utiliza `build/icon.ico` como icono del instalador y de la aplicación.

## 🔄 Publicar una nueva versión

El proyecto está preparado para generar releases mediante GitHub Actions.

1. Actualiza la versión en `package.json`.
2. Haz commit y push a `main`.
3. Crea un tag con el mismo número usando el prefijo `v`.
4. Sube el tag a GitHub.

Ejemplo:

```bash
git add .
git commit -m "Version 2.2.0"
git push

git tag v2.2.0
git push origin v2.2.0
```

El workflow de `.github/workflows/build.yml` se encarga de compilar el instalador de Windows y publicarlo como GitHub Release junto con los archivos necesarios para `electron-updater`.

## 📁 Estructura

```text
Descargador-Online-Youtube/
├── .github/
│   └── workflows/
│       └── build.yml
├── build/
│   └── icon.ico
├── src/
│   ├── icon.png
│   ├── index.html
│   ├── main.js
│   ├── preload.js
│   ├── renderer.js
│   └── styles.css
├── .gitignore
├── package.json
└── README.md
```

## 🔐 Privacidad

La aplicación está planteada como una herramienta de escritorio. El historial y las preferencias que gestiona la aplicación se almacenan localmente según su implementación. No requiere una cuenta propia dentro de la aplicación para sus funciones principales.

## 📜 Licencia

Este repositorio debe incluir un archivo de licencia si deseas distribuir el proyecto bajo una licencia concreta. Si todavía no has elegido una, puedes añadirla posteriormente desde GitHub.

---

<p align="center">
  <strong>Descargador Videos Online YT</strong><br>
  Una herramienta de escritorio para gestionar descargas multimedia de forma sencilla.
</p>

<p align="center">
  <a href="https://github.com/bryanlopezvr/Descargador-Online-Youtube">Ver repositorio en GitHub</a>
</p>