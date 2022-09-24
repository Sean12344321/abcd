t = int(input())
for i in range(t):
    d, r, n = int(input().split())
    r = pow(r, n+1)-1
    print(r % d)