@echo off
:being
cls
if exist BlueTooth_test.txt del BlueTooth_test.txt > nul
if exist hwids.txt del hwids.txt > nul
if exist bttest.log del bttest.log > nul
if exist bt_pass.flg del bt_pass.flg > nul
if exist bt_fail.flg del bt_fail.flg > nul
echo %date% %time% : Bluetooth test Start >> BlueTooth_test.txt

devcon.exe hwids *> hwids.txt
find /C "Bluetooth" hwids.txt
if %ERRORLEVEL% NEQ 0 goto fail
goto pass

:fail
cls
echo FAIL >> bttest.log
REM echo %date% %time% : Bluetooth test FAIL >> BlueTooth_test.txt
echo.
WMSG red Bluetooth Test FAIL!!!
REM echo.
REM echo.
REM WMSG red Not Found Bluetooth Device!
REM echo.
REM echo.
REM WMSG red Please Check bttest.log !!!
REM echo.
REM echo.
timeout 2 > nul
echo.
exit 1

:pass
cls
echo PASS >> bttest.log
REM echo %date% %time% : Bluetooth test PASS >> BlueTooth_test.txt
echo.
REM echo.
WMSG green Bluetooth Test PASS!
REM echo.
REM WMSG green Bluetooth Test PASS!
REM echo.
REM WMSG green Bluetooth Test PASS!
REM echo.
timeout 2 > nul
exit 0