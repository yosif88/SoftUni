exam_hour = int(input())
exam_min = int(input())
hour_of_arrival = int(input())
min_of_arrival = int(input())

total_minutes_exam = exam_hour * 60 + exam_min
total_minutes_student = hour_of_arrival * 60 + min_of_arrival

min_diff = abs(total_minutes_exam - total_minutes_student)

hour = 0
minute = 0

if total_minutes_student > total_minutes_exam:
    print('Late')

    if min_diff < 60:
        print(f"{min_diff} minutes after the start")
    else:
        hour = min_diff // 60
        minute = min_diff % 60

        if minute < 10:
            print(f"{hour}:0{minute} hours after the start")
        else:
            print(f"{hour}:{minute} hours after the start")

elif total_minutes_student < total_minutes_exam - 30:
    print("Early")

    if min_diff < 60:
        print(f"{min_diff} minutes before the start")
    else:
        hour = min_diff // 60
        minute = min_diff % 60

        if minute < 10:
            print(f"{hour}:0{minute} hours before the start")
        else:
            print(f"{hour}:{minute} hours before the start")

else:
    print("On time")
    print(f"{min_diff} minutes before the start")