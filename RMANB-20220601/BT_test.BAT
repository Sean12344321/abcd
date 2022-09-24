@echo off
:being
cls
if exist BlueTooth_test.txt del BlueTooth_test.txt > nul
echo %date% %time% : Bluetooth test Start >> BlueTooth_test.txt
echo.
bluetoothdevtest.exe
if %ERRORLEVEL% NEQ 0 goto fail
goto pass

:fail
echo %date% %time% : Bluetooth test FAIL >> BlueTooth_test.txt
echo.
WMSG red Bluetooth Test FAIL!!!
echo.
echo.
WMSG red Not Found Bluetooth Device!
echo.
echo.
WMSG red Please Check bttest.log !!!
echo.
echo.
timeout 3 > nul
echo.
pause
exit 1

:pass
echo %date% %time% : Bluetooth test PASS >> BlueTooth_test.txt
echo.
echo.
WMSG green Bluetooth Test PASS!
echo.
WMSG green Bluetooth Test PASS!
echo.
WMSG green Bluetooth Test PASS!
echo.
timeout 3 > nul
exit 0