number_of_pages = int(input())
pages_read_per_hour = int(input())
days = int(input())

reading_time = number_of_pages // pages_read_per_hour

hours_per_day = reading_time // days

print(hours_per_day)