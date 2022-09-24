@echo off
:B
echo   81 key..................(1)
echo   83 key..................(2)
echo   87 key..................(3)
echo   102 key.................(4)
echo   103 key.................(5)
echo   105 key.................(6)
echo   other keys..............(7)
echo   1812 model..............(8)


choice /c:12345678

if errorlevel 8 goto 1812
if errorlevel 7 goto other
if errorlevel 6 goto 105
if errorlevel 5 goto 103
if errorlevel 4 goto 102
if errorlevel 3 goto 87
if errorlevel 2 goto 83
if errorlevel 1 goto 81


:81
copy 81.ini wkbc.ini
call keyboard.exe
goto end

:83
copy 83.ini wkbc.ini
call keyboard.exe
goto end

:87
copy 87.ini wkbc.ini
call keyboard.exe
goto end

:102
copy 102.ini wkbc.ini
call keyboard.exe
goto end

:103
copy 103.ini wkbc.ini
call keyboard.exe
goto end

:105
copy 105.ini wkbc.ini
call keyboard.exe
goto end

:other
call keyboard.exe
goto end

:1812
copy 1812.ini wkbc.ini
call keyboard.exe
goto end

:end



