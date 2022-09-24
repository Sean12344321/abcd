from math import*
number = 5
name = "hello"
print(str(number))
#round floor ceil
scores = [1, 2, 3, 4, 5]
ext = [3, 3, 4]
print(scores[1:])
print(scores[:])
scores.extend(ext)
scores.append(30)#在scores後面多一個30
scores.insert(2, 30)
scores.remove(30)
scores.reverse()
scores.pop()
scores.sort()
print(scores.index(3))
print(scores.count(30))
tuple = (1, 2, 3, 4, 5) #元組，防止資料修改
