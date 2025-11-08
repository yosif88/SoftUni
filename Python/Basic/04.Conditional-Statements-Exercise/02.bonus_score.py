start_point = int(input())

bonus = 0
total_point = 0

if start_point <= 100:
    bonus = 5
elif start_point <= 1000:
    bonus = start_point * 0.20
elif start_point > 1000:
    bonus = start_point * 0.10

if start_point % 2 == 0:
    bonus += 1
elif start_point % 5 == 0:
    bonus += 2
total_point = start_point + bonus

print(bonus)
print(total_point)