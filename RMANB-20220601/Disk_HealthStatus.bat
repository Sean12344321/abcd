@ECHO OFF
cls
:begin
echo.
echo *********************************************************** 
echo * CrystalDiskInfo running DiskInfo Health Status Test     *
echo ***********************************************************

:begin
DiskHSDiag.exe
if errorlevel 1 goto fail
goto pass

:fail
echo.
MSGx64 red Disk Health Status Test FAIL!
echo.
MSGx64 red Disk Health Status Test FAIL!
echo.
MSGx64 red Please Check test.log and DiskInfo.txt log file!
echo.
pause
exit 1



:pass
echo.
MSGx64 green Disk Health Status : Good
echo.
MSGx64 green Disk Health Status : Good
echo.
MSGx64 green Disk Health Status : Good
echo.
ping 127.0.0.1 -n 3 -w 2000 > nul
exit 0
