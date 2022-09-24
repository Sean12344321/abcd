@ECHO OFF
cd WINTEST\MICOUT
if exist testlog.log del testlog.log
rem :START
rem wAudioDevices35mm.exe /s /35mm
rem IF NOT ERRORLEVEL 1 GOTO PASS

rem :FAIL
playrecord.exe
goto END

rem :PASS
rem ECHO Please remove the headphone.
rem pause


:END