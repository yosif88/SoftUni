months = input()
count_night = int(input())

price_studio = 0
price_apartment = 0

if months == "May" or months == "October":
    price_studio = 50 * count_night
    price_apartment = 65 * count_night

    if count_night > 14:
        price_studio *= 0.7
        price_apartment *= 0.90
    elif count_night > 7:
        price_studio *= 0.95

elif months == "June" or months == "September":
    price_studio = 75.20 * count_night
    price_apartment = 68.70 * count_night

    if count_night > 14:
        price_studio *= 0.80
        price_apartment *= 0.90

elif months == "July" or months == "August":
    price_studio = 76 * count_night
    price_apartment = 77 * count_night

    if count_night > 14:
        price_apartment *= 0.90

print(f"Apartment: {price_apartment:.2f} lv.")
print(f"Studio: {price_studio:.2f} lv.")