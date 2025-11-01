quantity_nylon = int(input())
quantity_paint = int(input())
quantity_thinner = int(input())
hours_workers = int(input())

sum_of_materials = ((quantity_nylon + 2) * 1.50) + (quantity_paint * 1.10 * 14.50) + (quantity_thinner * 5) + 0.4

sum_of_workers = sum_of_materials * 0.30 * hours_workers

total_sum = sum_of_workers + sum_of_materials

print(total_sum)
