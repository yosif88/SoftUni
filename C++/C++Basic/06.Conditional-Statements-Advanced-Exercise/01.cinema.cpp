#include <iostream>
#include <string>

using namespace std;

int main()
{
    string typeProject;
    int row, col;

    cin >> typeProject;
    cin >> row >> col;

    int allSeats = row * col;

    double priceTickets = 0;

    if (typeProject == "Premiere")
    {
        priceTickets = 12.0;
    }
    else if (typeProject == "Normal")
    {
        priceTickets = 7.50;
    }

    else if (typeProject == "Discount")
    {
        priceTickets = 5.0;
    }

    priceTickets *= allSeats;

    cout.setf(ios::fixed);
    cout.precision(2);

    cout << priceTickets << " leva" << endl;

    return 0;

}