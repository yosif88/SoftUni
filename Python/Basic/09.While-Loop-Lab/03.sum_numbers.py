number = int(input())

num = int(input())

sumNum = 0

while True:
    sumNum += num
    
    if sumNum >= number:
        break
    num = int(input())

print(sumNum)