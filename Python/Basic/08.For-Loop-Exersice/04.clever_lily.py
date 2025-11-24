ages = int(input())
washing_machine_price = float(input())
price_toys = int(input())

money_save = 10
total_sum = 0
count_toys = 0


for age in range(1, ages+1):

    if (age % 2 == 0):
        total_sum  += money_save
        money_save += 10
        total_sum -= 1
    else:
        count_toys += 1

total_sum += count_toys * price_toys

if total_sum >= washing_machine_price:
    print(f"Yes! {abs(total_sum - washing_machine_price):.2f}")
else:
    print(f"No! {abs(total_sum - washing_machine_price):.2f}")