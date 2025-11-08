price_tour = float(input())
count_puzzle = int(input())
count_dolls = int(input())
count_bears = int(input())
count_minions = int(input())
count_trucks = int(input())

total_sum = (count_puzzle * 2.60)\
            + (count_dolls * 3)\
            + (count_bears * 4.10) \
            + (count_minions * 8.20) \
            + (count_trucks * 2)
total_count_toys = count_puzzle + count_dolls + count_minions + count_bears + count_trucks

if total_count_toys >= 50:
    total_sum *= 0.75
total_sum *= 0.9

if total_sum >= price_tour:
    print(f'Yes! {abs(total_sum-price_tour):.2f} lv left.')
else:
    print(f'Not enough money! {abs(total_sum-price_tour):.2f} lv needed.')