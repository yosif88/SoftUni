days = int(input())
type_of_room = input()
feedback = input()

days -= 1
price = 0

if type_of_room == "room for one person":
    price = 18.00 * days

elif type_of_room == "apartment":
    price = 25.00 * days

    if days < 10:
        price *= 0.70
    elif 10 <= days <= 15:
        price *= 0.65
    elif days > 15:
        price *= 0.50

elif type_of_room == "president apartment":
    price = 35.00 * days

    if days < 10:
        price *= 0.90
    elif 10 <= days <= 15:
        price *= 0.85
    elif days > 15:
        price *= 0.80

if feedback == "positive":
    price *= 1.25
else:
    price *= 0.90

print(f"{price:.2f}")