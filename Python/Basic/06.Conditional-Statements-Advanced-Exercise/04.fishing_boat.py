budget = int(input())
season = input()
number_of_fishermen = int(input())

price = 0

if season == "Spring":
    price = 3000
    if 6 >= number_of_fishermen:
        price *= 0.90
    elif  number_of_fishermen <= 11:
        price *= 0.85
    elif number_of_fishermen > 12:
        price *= 0.75

elif season == "Summer" or season == "Autumn":
    price = 4200
    if 6 >= number_of_fishermen:
        price *= 0.90
    elif number_of_fishermen <= 11:
        price *= 0.85
    elif number_of_fishermen > 12:
        price *= 0.75

else:
    price = 2600
    if 6 >= number_of_fishermen:
        price *= 0.90
    elif number_of_fishermen <= 11:
        price *= 0.85
    elif number_of_fishermen > 12:
        price *= 0.75

if number_of_fishermen % 2 == 0 and season != "Autumn":
    price *= 0.95

if budget >= price:
    print(f"Yes! You have {budget-price:.2f} leva left.")
else:
    print(f"Not enough money! You need {price - budget:.2f} leva.")