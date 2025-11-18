town = input()
sales = float(input())

commission = 0
if sales > 0:

    if town == "Sofia":
        if 0 <= sales <= 500:
            commission = sales * 0.05
        elif sales <= 1000:
            commission = sales * 0.07
        elif sales <= 10000:
            commission = sales * 0.08
        elif sales > 10000:
            commission = sales * 0.12

    elif town == "Varna":
        if 0 <= sales <= 500:
            commission = sales * 0.045
        elif sales <= 1000:
            commission = sales * 0.075
        elif sales <= 10000:
            commission = sales * 0.10
        elif sales > 10000:
            commission = sales * 0.13

    elif town == "Plovdiv":
        if 0 <= sales <= 500:
            commission = sales * 0.055
        elif sales <= 1000:
            commission = sales * 0.08
        elif sales <= 10000:
            commission = sales * 0.12
        elif sales > 10000:
            commission = sales * 0.145
    else:
        print("error")
else:
    print("error")

if commission > 0:
    print(f'{commission:.2f}')


