#include <iostream>

using namespace std;

int main()
{
    double budget, priceClothing;
    int numberOfExtra;

    cin >> budget;
    cin >> numberOfExtra;
    cin >> priceClothing;

    double decorCost = budget * 0.10;
    double sumOfClothing = numberOfExtra * priceClothing;

    if (numberOfExtra > 150)
    {
        sumOfClothing *= 0.90;
    }

    double totalCost = sumOfClothing + decorCost;

   
    cout.setf(ios::fixed);
    cout.precision(2);

    if (totalCost <= budget)
    {
         double moneyLeft = abs(budget - totalCost);

        cout << "Action!" << endl;
        cout << "Wingard starts filming with " << moneyLeft << " leva left." << endl;
    }
    else
    {
        cout << "Not enough money!" << endl;
        double moneyNeeded = abs(budget - totalCost);

        cout << "Wingard needs " << moneyNeeded << " leva more.";
    }
}
