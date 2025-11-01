deposited_amount = float(input())
term_of_deposit = int(input())
percent = float(input())

accumulated_interest = deposited_amount * (percent / 100)

interest_for_one_month = accumulated_interest / 12

total_sum = deposited_amount + term_of_deposit *((deposited_amount * (percent / 100)) / 12)

print(total_sum)



