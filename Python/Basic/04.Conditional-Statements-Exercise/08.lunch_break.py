import math

film = input()
episode_duration = int(input())
rest_duration = int(input())

time_for_lunch = rest_duration / 8
time_for_rest = rest_duration / 4

total_time = rest_duration - time_for_lunch - time_for_rest

if total_time >= episode_duration:
    diff = math.ceil(total_time - episode_duration)
    print(f"You have enough time to watch {film} and left with {diff} minutes free time.")
else:
    timeNeeded = math.ceil(episode_duration - total_time)
    print(f"You don't have enough time to watch {film}, you need {timeNeeded} more minutes.")