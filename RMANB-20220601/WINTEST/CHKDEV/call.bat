@echo oFF
:START

if exist PASS.LOG del PASS.LOG
checkProblemDevice.exe
FIND /I "PASS" PASS.LOG
IF NOT ERRORLEVEL 1 GOTO PASS

:fail
PASS F
GOTO END

:pass
PASS P

:end