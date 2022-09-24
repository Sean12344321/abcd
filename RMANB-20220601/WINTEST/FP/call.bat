@echo off
cd /d %~dp0MPTool_MOC_v2.1.0.480
del customer.log
start GFMPTestMoc.exe

:start
timeout /t 1
find /i "Result: PASS" customer.log
if not errorlevel 1 goto pass
goto start

:pass
taskkill /F /IM GFMPTestMoc.exe
taskkill /F /IM GFMPTestMoc.exe
taskkill /F /IM GFMPTestMoc.exe
cd /d %~dp0
PASS P