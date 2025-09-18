#include <iostream>

using namespace std;

int main()
{
    int budget, fisherMen;
    string season;

    cin >> budget;
    cin >> season;
    cin >> fisherMen;

    double price = 0.0;

    if (season == "Spring")
    {
        price = 3000;
    }
    else if (season == "Summer" || season == "Autumn")
    {
        price = 4200;
    }
    else if (season == "Winter")
    {
        price = 2600;
    }

    if (fisherMen <= 6)
    {
        price *= 0.90;
    }
    else if (fisherMen <= 11)
    {
        price *= 0.85;
    }
    else if (fisherMen >= 12)
    {
        price *= 0.75;
    }

    if (fisherMen % 2 == 0 && season != "Autumn"){
        price *= 0.95;
    }

    cout.setf(ios:: fixed);
    cout.precision(2);

    if (budget >= price)
    {
       double moneyLeft = budget - price;
        cout << "Yes! You have " << moneyLeft << " leva left." << endl;
    }
    else
    {
        cout << "Not enough money! You need " <<price-budget << " leva." << endl;
    }

    return 0;
}