PRICE_PEN = 5.80
PRICE_MARKER = 7.20
PRICE_CLEANER = 1.20

number_of_packs_pens = int(input())
number_of_packs_markers = int(input())
board_cleaner = int(input())
discount_percentage = int(input())

total_sum = ((number_of_packs_pens * PRICE_PEN)
           + (number_of_packs_markers * PRICE_MARKER)
           + (board_cleaner * PRICE_CLEANER))


price_discount = total_sum * ((100 - discount_percentage) / 100)
print(price_discount)

