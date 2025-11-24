n = int(input())

left_sum = 0
right_sum = 0

for idx in range(n * 2):
    number = int(input())

    if idx < n:
        left_sum += number
    else:
        right_sum += number

if left_sum == right_sum:
    print(f'Yes, sum = {left_sum}')
else:
    print(f'No, diff = {abs(left_sum - right_sum)}')