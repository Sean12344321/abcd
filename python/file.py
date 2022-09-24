#檔案讀取and寫入

#open("檔案路徑", mode = "開啟模式")
#絕對路徑 ex:  C:/Users/user/OneDrive/桌面/python/abc.txt
#相對路徑 ex:  abc.txt

# mode = "r" 讀取
# mode = "w" 覆(蓋)寫
# mode = "a" 在原先資料寫東西

file = open("abc.txt", mode = "r")
print(file.readlines())
file = open("abc.txt", mode = "r")
print(file.read())
file = open("abc.txt", mode = "r")
for line in file:
    print(line)
print("?")
file = open("abc.txt", mode = "a", encoding="utf-8")
file.write("\nasdf")
with open("abc.txt", mode="a", encoding="utf-8") as file:
    file.write("\n你好")

