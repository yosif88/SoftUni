projection_type = input()
row = int(input())
col = int(input())

totalSpace = row * col

price = 0

if projection_type == "Premiere":
    price = totalSpace * 12
elif projection_type == "Normal":
    price = totalSpace * 7.50
else:
    price = totalSpace * 5.0

print(f"{price:.2f} leva")
