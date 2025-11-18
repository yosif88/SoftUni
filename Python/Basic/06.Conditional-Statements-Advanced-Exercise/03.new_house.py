flower_type = input()
number_of_flowers = int(input())
budget = int(input())

price = 0

if flower_type == "Roses":
    price = 5
elif flower_type == "Dahlias":
    price = 3.80
elif flower_type == "Tulips":
    price = 2.80
elif flower_type == "Narcissus":
    price = 3
else:
    price = 2.50

price *= number_of_flowers

if flower_type == "Roses" and number_of_flowers > 80:
    price  *= 0.90
elif flower_type == "Dahlias" and number_of_flowers > 90:
    price *= 0.85
elif flower_type == "Tulips" and number_of_flowers > 80:
    price *= 0.85
elif flower_type == "Narcissus" and number_of_flowers < 120:
    price *= 1.15
elif flower_type == "Gladiolus" and number_of_flowers < 80:
    price *= 1.20

if budget >= price:
    money_left = budget-price
    print(f"Hey, you have a great garden with {number_of_flowers} {flower_type} and {money_left:.2f} leva left.")
else:
    money_needed = price-budget
    print(f"Not enough money, you need {money_needed:.2f} leva more.")
