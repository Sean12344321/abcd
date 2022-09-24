@echo off
copy WINTEST\KEYBOARD\other.ini WINTEST\KEYBOARD\wkbc.ini /Y
call WINTEST\KEYBOARD\keyboard.exe
:end