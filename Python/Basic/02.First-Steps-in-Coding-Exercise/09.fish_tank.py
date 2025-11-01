w = int(input())
l = int(input())
h = int(input())
percentage = float(input())

volume_of_aquarium = w * l * h
volume_in_liters = volume_of_aquarium * 0.001

needed_liters = volume_in_liters *(1-(percentage / 100 ))

print(needed_liters)