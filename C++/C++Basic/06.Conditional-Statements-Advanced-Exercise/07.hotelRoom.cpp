#include <iostream>
#include <string>

using namespace std;

int main()
{
    string month;
    int nights;

    cin >> month;
    cin >> nights;

    double studioTotalCost = 0.0;
    double apartmentTotalCost = 0.0;

    if (month == "May" || month == "October")
    {
        studioTotalCost = nights * 50;
        apartmentTotalCost = nights * 65;

        if (nights > 14)
        {
            studioTotalCost *= 0.7;
        }
        else if (nights > 7)
        {
            studioTotalCost *= 0.95;
        }
    }
    else if (month == "June" || month == "September")
    {
        studioTotalCost = nights * 75.20;
        apartmentTotalCost = nights * 68.70;
        
        if (nights > 14)
        {
            studioTotalCost *= 0.80;
        }
    }
    else if (month == "July" || month == "August")
    {
            studioTotalCost = nights * 76;
            apartmentTotalCost = nights * 77;
    }

    if (nights > 14)
    {
        apartmentTotalCost *= 0.90;
    }

    cout.setf(ios::fixed);
    cout.precision(2);

    cout << "Apartment: " << apartmentTotalCost <<" lv." << endl;
    cout <<  "Studio: " << studioTotalCost << " lv." << endl;

    return 0;
}