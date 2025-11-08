budget = float(input())
number_of_vga = int(input())
number_of_cpu = int(input())
number_of_ram = int(input())

price_vga = number_of_vga * 250
price_cpu = (price_vga * 0.35) * number_of_cpu
price_ram = (price_vga * 0.10) * number_of_ram

total_sum = price_vga + price_cpu + price_ram

if number_of_vga > number_of_cpu:
    total_sum *= 0.85

if budget >= total_sum:
    print(f'You have {budget-total_sum:.2f} leva left!')
else:
    print(f'Not enough money! You need {total_sum-budget:.2f} leva more!')