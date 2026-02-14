@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul

cd /d "C:\เอกสาร\CE385"

echo [*] Configuring git...
git config core.editor "true"
git config --global core.editor "true"

echo [*] Fetching updates...
git fetch origin main

echo [*] Current status:
git status

echo [*] Resetting to origin/main...
git reset --hard origin/main

echo [*] Cleaning untracked files...
git clean -fd

echo [*] Getting list of files:
dir /s /b

echo [*] Done!
pause
