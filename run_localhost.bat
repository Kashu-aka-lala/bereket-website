@echo off
echo ===================================================
echo Starting Local Server for Bereket Website...
echo ===================================================

:: Check if Python is installed
python --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo Starting Python http.server on http://localhost:8000 ...
    python -m http.server 8000
    goto end
)

:: Check if py is installed
py --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo Starting Python http.server via py launcher on http://localhost:8000 ...
    py -m http.server 8000
    goto end
)

:: Check if PHP is installed
php --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo Starting PHP built-in server on http://localhost:8000 ...
    php -S localhost:8000
    goto end
)

:: Check if Node/npx is installed
npx --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo Starting Node.js http-server on http://localhost:8000 ...
    npx http-server -p 8000
    goto end
)

echo ERROR: Neither Python, PHP, nor Node.js/npx was found on your system path.
echo Please install Python or Node.js to run the local server.
pause

:end
