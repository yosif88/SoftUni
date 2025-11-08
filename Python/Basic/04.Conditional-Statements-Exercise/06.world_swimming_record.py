import math

word_records = float(input())
distance = float(input())
time_per_meter= float(input())

time_distance = distance * time_per_meter
delay_time = math.floor(distance / 15) * 12.5

total_time = time_distance + delay_time

if total_time < word_records:
    print(f" Yes, he succeeded! The new world record is {total_time:.2f} seconds.")
else:
    print(f"No, he failed! He was {abs(total_time-word_records):.2f} seconds slower.")