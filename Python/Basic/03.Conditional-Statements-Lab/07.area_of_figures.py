from math import pi, pow

figure = input()
area = 0

if figure == "square":
    sideA = float(input())
    area = sideA * sideA
elif figure == "rectangle":
    sideA = float(input())
    sideB = float(input())
    area = sideA * sideB
elif figure == "circle":
    radius = float(input())
    area =  pi * pow(radius, 2)
elif figure == "triangle":
    length = float(input())
    height = float(input())
    area =(height * length)/ 2
print(f'{area:.3f}')
