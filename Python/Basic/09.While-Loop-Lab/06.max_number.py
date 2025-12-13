import sys

command = input()

maxNum = -sys.maxsize

while command != "Stop":
    num = int(command)
    
    if num > maxNum:
        maxNum = num

    command = input()

print(maxNum)