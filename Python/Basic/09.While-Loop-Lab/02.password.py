username = input()
passwd = input()

data = input()

while data != passwd:
    data = input()

print(f"Welcome {username}!")