from math import floor

tournaments = int(input())
initial_points = int(input())

points = 0
wins = 0

for _ in range(tournaments):
    tournament = input()

    if tournament == 'W':
        points += 2000
        wins += 1
    elif tournament == 'F':
        points += 1200
    elif tournament == 'SF':
        points +=720

final_points = points + initial_points

average_points = points / tournaments 

percent_win_tournaments = wins / tournaments * 100

print(f"Final points: {final_points}")
print(f"Average points: {floor(average_points)}")
print(f"{percent_win_tournaments:.2f}%")