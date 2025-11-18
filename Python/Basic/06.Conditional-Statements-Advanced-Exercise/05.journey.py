budget = float(input())
season = input()

type_of_vacation = ""
destination = ""

total_sum = 0

if budget <= 100:
    destination = "Bulgaria"
    if season == "summer":
        type_of_vacation = "Camp"
        total_sum = budget * 0.30
    else:
        type_of_vacation = "Hotel"
        total_sum = budget * 0.70

elif budget <= 1000:
    destination = "Balkans"
    if season == "summer":
        type_of_vacation = "Camp"
        total_sum = budget * 0.40;
    else:
        type_of_vacation = "Hotel"
        total_sum = budget * 0.80
else:
    destination = "Europe"
    type_of_vacation = "Hotel"
    total_sum = budget * 0.90

print(f"Somewhere in {destination}")
print(f"{type_of_vacation} - {total_sum:.2f}")