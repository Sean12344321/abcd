@echo off
if exist wCamera_test_RMA.log del wCamera_test_RMA.log >nul
if exist pass.log del pass.log > nul
if exist fail.log del fails.log > nul

:begin
echo %date%  %time%  : Camera test start >> wCamera_test_RMA.log

ZxingWithDS.exe
if exist fail.log goto fail
if exist pass.log goto pass

:fail
echo %date%  %time%  : Camera test fail >> wCamera_test_RMA.log
echo.
MSGx64 red Camera test fail
echo.
MSGx64 red Camera test fail
echo.
MSGx64 red Camera test fail
echo.
echo.
pause
goto begin

:pass
echo %date%  %time%  : Camera test Pass >> wCamera_test_RMA.log
echo.
MSGx64 green Camera Test PASS
echo.
MSGx64 green Camera Test PASS
echo.
MSGx64 green Camera Test PASS
echo.
pause
