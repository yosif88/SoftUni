command = input()

totalSum = 0

while command != 'NoMoreMoney':
    money = float(command)
    if money < 0:
        print('Invalid operation!')
        break
   
    print(f'Increase: {money:.2f}')
   
    totalSum += money

    command = input()

print(f'Total: {totalSum:.2f}')