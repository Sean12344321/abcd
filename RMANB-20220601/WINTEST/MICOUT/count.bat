@ECHO OFF

:START
wAudioDevices35mm.exe /all /count
IF NOT ERRORLEVEL 1 GOTO PASS

:FAIL
ECHO fail
pause
goto END

:PASS
echo PASS>pass.txt


:END