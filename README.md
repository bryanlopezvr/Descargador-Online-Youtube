# Descargador Videos Online YT

Aplicación de escritorio (Electron) para descargar videos, con actualizaciones automáticas vía GitHub Releases.

## Desarrollo local

```bash
npm install
npm start
```

## Generar el instalador (.exe) manualmente

```bash
npm run dist
```

El instalador queda en la carpeta `dist/` (no se sube a git, ver `.gitignore`).

## Publicar una nueva versión (automático)

Cada vez que quieras subir una nueva versión con su `.exe`:

1. Sube tus cambios normales a `main`.
2. Sube la versión en `package.json` (campo `"version"`), por ejemplo a `2.2.0`.
3. Crea y sube un tag con el mismo número, con el prefijo `v`:

   ```bash
   git add .
   git commit -m "Version 2.2.0"
   git push
   git tag v2.2.0
   git push origin v2.2.0
   ```

4. Eso dispara el workflow de GitHub Actions (`.github/workflows/build.yml`), que:
   - Compila el `.exe` en un runner de Windows.
   - Lo sube automáticamente como GitHub Release, junto con los archivos que necesita `electron-updater` (`latest.yml`, etc.).

5. Los usuarios que ya tengan la app instalada recibirán la actualización automática (la app ya usa `electron-updater` apuntando a este repo).

No hace falta configurar ningún token: GitHub Actions usa automáticamente `secrets.GITHUB_TOKEN`, que ya tiene permiso para crear Releases en tu propio repositorio.
