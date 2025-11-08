time_first = int(input())
time_second = int(input())
time_third = int (input())

total_second = time_first + time_second + time_third
minutes = total_second // 60
seconds = total_second % 60

result = ''

if seconds < 10:
    result = f'{minutes}:0{seconds}'
else:
    result = f'{minutes}:{seconds}'

print(result)