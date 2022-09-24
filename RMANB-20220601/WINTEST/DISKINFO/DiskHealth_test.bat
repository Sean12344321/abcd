@ECHO OFF
cls
:begin
echo.
echo ******************************************************** 
echo * CrystalDiskInfo 8.3.0 DiskInfo Health Status Test    *
echo ********************************************************

:begin
DiskHSDiag.exe
if errorlevel 1 goto fail
goto pass

:fail
echo.
echo Disk Health Status Test FAIL!
echo.
echo Disk Health Status Test FAIL!
echo.
echo Please Check test.log and DiskInfo.txt log file!
echo.
timeout 3 > nul
pause
exit 1



:pass
echo.
echo.
echo.
echo Disk Health Status Test PASS!
echo.
echo Disk Health Status : Good
echo.
echo Disk Health Status Test PASS!
echo.
timeout 3 > nul
exit 0
