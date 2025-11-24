import sys

n = int(input())

sum_number = 0
max_number = -sys.maxsize

for _ in range(n):
    number = int(input())

    if number > max_number:
        max_number = number

    sum_number += number  

if max_number == sum_number - max_number:
    print(f"Yes\nSum = {max_number}")  
else:
    sum_number -= max_number
    print(f"No\nDiff = {abs(sum_number-max_number)}")