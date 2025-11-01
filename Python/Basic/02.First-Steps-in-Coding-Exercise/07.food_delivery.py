number_of_chicken_menus = int(input())
number_of_fish_menus = int(input())
number_of_vegan_menus = int(input())

total_sum_of_menus = ((number_of_chicken_menus * 10.35)
                      + (number_of_fish_menus * 12.40)
                      + (number_of_vegan_menus  * 8.15))

price_of_dessert = total_sum_of_menus * 0.20

total_sum = total_sum_of_menus + price_of_dessert + 2.50
print(total_sum)
