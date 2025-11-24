actor_name = input()
academy_point = float(input())
jury_count = int(input())

for _ in range(jury_count):
    jury_name = input()
    points = float(input())

    academy_point += len(jury_name) * points / 2
    
    if academy_point >= 1250.5:
        print(f"Congratulations, {actor_name} got a nominee for leading role with {academy_point:.1f}!")
        break
else:
    print(f"Sorry, {actor_name} you need {abs(academy_point - 1250.5):.1f} more!")



