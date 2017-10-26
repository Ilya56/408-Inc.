echo off
title Create backup
color a
cls

echo Welcome to backup creator
echo Copy this file to directory for backup
set pth="E:\Site\Backup"
DEL /F /S /Q /A %pth% 
xcopy %cd% %pth% /s /e /k /f /c