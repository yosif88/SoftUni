n1 = int(input())
n2 = int(input())
command = input()

result = ""

if command == "+":
    result = f"{n1} {command} {n2} = {n1 + n2} - {'even' if (n1 + n2) % 2 == 0 else 'odd'}"

elif command == "-":
    result =f"{n1} {command} {n2} = {n1 - n2} - {'even' if (n1 - n2) % 2 == 0 else 'odd'}"

elif command == "*":
    result = f"{n1} {command} {n2} = {n1 * n2} - {'even' if (n1 * n2) % 2 == 0 else 'odd'}"

elif n2 == 0:
    result = f"Cannot divide {n1} by zero"

elif command == "/":
    result = f"{n1} {command} {n2} = {n1 / n2:.2f}"

elif command == "%":
    result = f"{n1} {command} {n2} = {n1 % n2}"

print(result)