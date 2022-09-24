#模組 module的使用
#pip 套件管理工具 pip install numpy
import token #內建的
import sys 
import numpy as np
from hello import number
print(number)
# class object(self)
class Phone:
    def __init__(self,os,number,is_waterproof):
        self.os = os
        self.number = number
        self.is_waterproof = is_waterproof
    def is_ios(self):
        if self.os == "ios":
            return True
        else:
            return False
phone1 = Phone("ios",123,True)
print(phone1.number)
print(phone1.is_ios())