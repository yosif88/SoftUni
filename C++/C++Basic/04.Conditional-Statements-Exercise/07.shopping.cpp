#include <iostream>

using namespace std;

int main()
{
    double budget;
    int countVga, countCpu, countRam;

    cin >> budget >> countVga >> countCpu >> countRam;

    double priceVga = countVga * 250;
    double priceCpu = priceVga * 0.35 * countCpu;
    double priceRam = priceVga * 0.10 * countRam;

    double totalPrice = priceCpu + priceVga + priceRam;

    if (countVga > countCpu)
    {
        totalPrice *= 0.85;
    }

    cout.setf(ios::fixed);
    cout.precision(2);

    if (budget >= totalPrice)
    {
        double moneyLeft = budget - totalPrice;

        cout << "You have " << moneyLeft << " leva left!" << endl;
    }
    else
    {
        double moneyNeeded = abs(budget - totalPrice);

        cout <<"Not enough money! You need " << moneyNeeded <<" leva more!" << endl;
    }

    return 0;
}
