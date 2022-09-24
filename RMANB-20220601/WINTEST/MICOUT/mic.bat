@echo off

:start
cd /d %~dp0
if exist testlog.log del testlog.log
call PlayRecord.exe
find /i "MIC PASS" testlog.log
if not errorlevel 1 goto pass

:fail
PASS F

:pass
PASS P

:end