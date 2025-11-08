budget = float(input())
number_of_extra = int(input())
cost_clothing_for_one_extra = float(input())

price_decor = budget * 0.10

sum_extra = number_of_extra * cost_clothing_for_one_extra

if number_of_extra > 150:
    sum_extra *= 0.90

total_sum = sum_extra + price_decor

if budget >= total_sum:
    print("Action!")
    print(f"Wingard starts filming with {abs(total_sum-budget):.2f} leva left.")
else:
    print("Not enough money!")
    print(f"Wingard needs {abs(budget - total_sum):.2f} leva more.")
