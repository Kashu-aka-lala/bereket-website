@echo off
:: Force execution in the script's local directory
cd /d "%~dp0"

echo ===================================================
echo Pushing changes to GitHub...
echo ===================================================

:: Check if git is installed
git --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo ERROR: Git is not installed or not in your system PATH.
    echo Please install Git to push code to GitHub.
    pause
    exit /b
)

:: Check if .git folder exists, if not initialize it
if not exist ".git" (
    echo No Git repository found. Initializing Git...
    git init
    echo.
    echo Adding remote repository: https://github.com/Kashu-aka-lala/bereket-website.git
    git remote add origin https://github.com/Kashu-aka-lala/bereket-website.git
    echo.
    echo Setting primary branch to main...
    git branch -M main
)

:: Configure local git user if not already set (fixes "Author identity unknown" error)
git config user.email >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Configuring local repository git email...
    git config user.email "info@bereketfoods.com"
)
git config user.name >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo Configuring local repository git name...
    git config user.name "Bereket Foods"
)

echo.
echo Staging all changes...
git add .

echo.
echo Committing changes...
:: Check if there are changes staged to commit
git diff --cached --quiet
if %ERRORLEVEL% equ 0 (
    echo No new changes to commit.
) else (
    git commit -m "Auto-commit: update Shopify coming soon banner and celebration animation"
)

echo.
echo Pushing to GitHub (origin main)...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ===================================================
    echo SUCCESS: Code pushed to GitHub successfully!
    echo ===================================================
) else (
    echo.
    echo ===================================================
    echo WARNING: Direct push failed. This usually happens if the remote repository 
    echo already contains commits.
    echo.
    echo If you want to overwrite the remote repository with your current files,
    echo open a terminal in this folder and run:
    echo.
    echo     git push origin main --force
    echo ===================================================
)

pause
