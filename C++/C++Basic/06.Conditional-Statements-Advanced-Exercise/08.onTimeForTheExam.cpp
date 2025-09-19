#include <iostream>
#include <string>
#include <cmath>

using namespace std;

int main()
{
    int hourOfExam, minutesOfExam, hourOfArrival, minutesOfArrival;
    cin >> hourOfExam >> minutesOfExam >> hourOfArrival >> minutesOfArrival;

    int totalMinutesExam = hourOfExam * 60 + minutesOfExam;
    int totalMinutesStudent = hourOfArrival * 60 + minutesOfArrival;

    int difference = totalMinutesExam - totalMinutesStudent;
    bool isLate = false;

    if (difference < 0)
    {
        isLate = true;
        cout << "Late" << endl;
    }
    else if (difference >= 0 && difference <= 30)
    {
        cout << "On time" << endl;
    }
    else if (difference > 30)
    {
        cout << "Early" << endl;
    }

    int absoluteDifference = abs(difference);
    int hours = absoluteDifference / 60;
    int minutes = absoluteDifference % 60;

    if (isLate)
    {
        if (hours >= 1)
        {
            if (minutes < 10)
            {
                cout << hours << ":0" << minutes << " hours after the start" << endl;
            }
            else
            {
                cout << hours << ":" << minutes << " hours after the start" << endl;
            }
        }
        else
        {
            cout << minutes << " minutes after the start" << endl;
        }
    }
    else
    {
        if (absoluteDifference > 0)
        {
            if (hours > 0)
            {
                if (minutes < 10)
                {
                    cout << hours << ":0" << minutes << " hours before the start" << endl;
                }
                else
                {
                   cout << hours << ":" << minutes << " hours before the start" << endl;
                }
            }
            else
            {
               cout << minutes << " minutes before the start" << endl;
            }
        }
    }


    return 0;
}