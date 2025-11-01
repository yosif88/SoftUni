square_meters = float(input())

needed_sum = square_meters * 7.61

discount = needed_sum * 0.18

total_sum = needed_sum - discount

print(f"The final price is: {total_sum} lv.")
print(f"The discount is: {discount} lv.")