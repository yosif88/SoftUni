#include <iostream>
#include <string>

using namespace std;

int main()
{
    int days;
    string typeOfRoom, feedback;

    cin >> days;
    cin.ignore();

    getline(cin, typeOfRoom);
    getline(cin, feedback);

    double price = 0.0;

    if (typeOfRoom == "room for one person")
    {
        price = 18;
    }
    else if (typeOfRoom == "apartment")
    {
        price = 25;
    }

    else if (typeOfRoom == "president apartment")
    {
        price = 35;
    }

    int numberOfNight = days - 1;
    double totalPrice = numberOfNight * price;

    if (typeOfRoom == "apartment")
    {
        if (days < 10)
        {
            totalPrice *= 0.70;
        }
        else if (10 <= days && days <= 15)
        {
            totalPrice *= 0.65;
        }
        else if (days > 15)
        {
            totalPrice *= 0.50;
        }
    }
    else if (typeOfRoom == "president apartment")
    {
          if (days < 10)
        {
            totalPrice *= 0.90;
        }
        else if (10 <= days && days <= 15)
        {
            totalPrice *= 0.85;
        }
        else if (days > 15)
        {
            totalPrice *= 0.80;
        }
    }

    if (feedback == "positive"){
        totalPrice *= 1.25;
    }
    else
    {
        totalPrice *= 0.90;
    }

    cout.setf(ios::fixed);
    cout.precision(2);

    cout << totalPrice << endl;

    return 0;
}