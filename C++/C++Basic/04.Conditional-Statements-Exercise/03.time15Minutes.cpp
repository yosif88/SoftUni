#include <iostream>

using namespace std;

int main()
{
    int hours, minutes;
    cin >> hours >> minutes;

    int totalMinutes = hours * 60 + minutes + 15;
    int newHours = totalMinutes / 60;
    int newMinutes = totalMinutes % 60;
   
    if (newHours == 24)
    {
        newHours = 0;
    }

    if (newMinutes < 10)
    {
        cout << newHours << ":0" << newMinutes << endl;
    }
    else
    {
        cout << newHours << ":" << newMinutes << endl;
    }

    return 0;
}