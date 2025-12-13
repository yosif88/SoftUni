name = input()

completed_class = 1
failed = 0
sum_of_grade = 0


while True:
    grade = float(input())

    if grade < 4:
        failed += 1
        if failed > 1:
            print(f"{name} has been excluded at {completed_class} grade")
            break
        
        continue
    
    sum_of_grade += grade
    
    if completed_class == 12:
        average_grade = sum_of_grade / 12
        print(f"{name} graduated. Average grade: {average_grade:.2f}")
        break
    completed_class += 1

