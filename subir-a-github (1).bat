@echo off
setlocal

REM ============================================
REM  Subir Descargador-Online-Youtube a GitHub
REM  Usuario: bryanlopezvr
REM  Repo:    Descargador-Online-Youtube
REM ============================================

set GH_USER=bryanlopezvr
set GH_EMAIL=stylobryanwongswaggyii@gmail.com
set GH_REPO=Descargador-Online-Youtube
set REPO_URL=https://github.com/%GH_USER%/%GH_REPO%.git

REM Colocarse en la carpeta donde esta este .bat
cd /d "%~dp0"

echo.
echo === Verificando Git ===
git --version >nul 2>&1
if errorlevel 1 (
    echo Git no esta instalado o no esta en el PATH.
    echo Descargalo de https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Inicializar repo si no existe
if not exist ".git" (
    echo.
    echo === Inicializando repositorio local ===
    git init
    git branch -M main
)

echo.
echo === Configurando usuario para este repo ===
git config user.name "%GH_USER%"
git config user.email "%GH_EMAIL%"

echo.
echo === Configurando remoto origin ===
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo.
set /p COMMIT_MSG=Mensaje del commit (Enter para "Actualizacion"): 
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Actualizacion

echo.
echo === Agregando cambios ===
git add .
git commit -m "%COMMIT_MSG%"

echo.
echo === Sincronizando con GitHub ===
git pull origin main --allow-unrelated-histories --no-edit
if errorlevel 1 (
    echo.
    echo No se pudo combinar automaticamente con lo que hay en GitHub.
    set /p FORCE=Quieres reemplazar lo de GitHub con tu version local? (S/N): 
    if /i "%FORCE%"=="S" (
        echo.
        echo === Forzando subida ===
        git push -u origin main --force
    ) else (
        echo.
        echo Cancelado. Resuelve los conflictos manualmente y vuelve a correr el .bat.
        pause
        exit /b 1
    )
) else (
    echo.
    echo === Subiendo a GitHub ===
    git push -u origin main
)

echo.
echo === Listo ===
pause
