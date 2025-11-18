hours = int(input())
day_of_week = input()

if day_of_week == "Sunday":
    print("closed")
else:
    if 10 <= hours <= 18:
        print("open")
    else:
        print("closed")
