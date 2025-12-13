import sys

command = input()

minNum = sys.maxsize

while command != "Stop":
    num = int(command)
    
    if num < minNum:
        minNum = num

    command = input()

print(minNum)