t = int(input())
while t:
    t = t-1
    a,b,c = map(int, input().split())
    d = ((pow(b, c+1)-1) / (b-1)) % a
    print(d)
