@ECHO OFF
CD WINTEST\MICIN
if exist testlog.log del testlog.log
:START
wAudioDevices35mm.exe /SPDIF /35mm
IF NOT ERRORLEVEL 1 GOTO PASS

:FAIL
ECHO Please insert the headphone.
pause
goto END

:PASS
playrecord.exe


:END