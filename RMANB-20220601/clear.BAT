echo off
if exist M.txt DEL M.txt
for /f "delims=" %%i in ('dir/b/s/ad wintest') do del/s/q "*.log"
call chk.bat
if exist M.txt copy M.txt SOFT\CHK\. /Y
exit
