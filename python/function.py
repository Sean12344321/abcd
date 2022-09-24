def hello(name,age):
    print("hello" + name + str(age))

hello("ww", 87)
score = 100
rainy = False
if score == 100 and rainy:
    hello("ss", 44)
else:
    hello("ww", 44)
# 字典dictionary
# key value
dic = {0: "apple", 1: "cat", 2:"dog"}
print(dic[0])

for num in range(2,7):
    print(num)
for num in [1,2,3,4,5]:
    print(num)
nums = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [9]
]
for row in nums:
    for col in row:
        print(col)