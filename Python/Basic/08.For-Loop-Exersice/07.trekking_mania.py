climber_group_count = int(input())

climbers_mussalla = 0
climbers_montblanc = 0
climbers_kilimanjaro = 0
climbers_K2 = 0
climbers_everest = 0

total_climber = 0

for _ in range(climber_group_count):
    climber_count = int(input())

    total_climber += climber_count

    if climber_count <= 5:
        climbers_mussalla += climber_count
    elif climber_count <= 12:
        climbers_montblanc += climber_count
    elif climber_count <= 25:
        climbers_kilimanjaro += climber_count
    elif climber_count <= 40:
        climbers_K2 += climber_count
    else:
        climbers_everest += climber_count

percent_climber_musalla = climbers_mussalla / total_climber * 100
percent_climber_montblanc = climbers_montblanc / total_climber * 100
percent_climber_kilimanjaro = climbers_kilimanjaro / total_climber * 100
percent_climber_k2 = climbers_K2 / total_climber * 100
percent_climber_everest = climbers_everest / total_climber * 100

print(f"{percent_climber_musalla:.2f}%")
print(f"{percent_climber_montblanc:.2f}%")
print(f"{percent_climber_kilimanjaro:.2f}%")
print(f"{percent_climber_k2:.2f}%")
print(f"{percent_climber_everest:.2f}%")
