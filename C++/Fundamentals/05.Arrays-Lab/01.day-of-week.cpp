#include <iostream>

using namespace std;

string NumberToWeekDay(int weekDay)
{
    static string weekDayNames[] = {
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"

    };

    if (weekDay < 1 || weekDay > 7)
    {
        return "Invalid day!";
    }
    else
    {
        weekDay--;
    }

    return weekDayNames[weekDay];
}
int main()
{
    int number;
    cin >> number;

    cout << NumberToWeekDay(number) << endl;
    return 0;
}