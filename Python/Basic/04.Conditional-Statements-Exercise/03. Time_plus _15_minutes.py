hours = int(input())
minutes = int(input())

total_minutes = minutes + (hours * 60) + 15

hour = total_minutes // 60
minute = total_minutes % 60

result = ''
if hour >= 24:
    hour = 0

if minute < 10:
    result = f'{hour}:0{minute}'
else:
    result = f'{hour}:{minute}'

print(result)