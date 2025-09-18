#include <iostream>

using namespace std;

int main()
{
    string typeFlowers;
    int countFlowers, budget;

    cin >> typeFlowers;
    cin >> countFlowers >> budget;

    double price = 0.0;

    if (typeFlowers == "Roses")
    {
        price = 5.0;
    }
    else if (typeFlowers == "Dahlias")
    {
        price = 3.80;
    }
    else if (typeFlowers == "Tulips")
    {
        price = 2.80;
    }

    else if (typeFlowers == "Narcissus")
    {
        price = 3.0;
    }
    else if (typeFlowers == "Gladiolus")
    {
        price = 2.50;
    }

    double totalPrice = price * countFlowers;

    if (countFlowers > 80 && typeFlowers == "Tulips"){
        totalPrice *= 0.85;
    }
    else if (countFlowers < 120 && typeFlowers == "Narcissus")
    {
        totalPrice *= 1.15;
    }
    else if (countFlowers < 80 && typeFlowers == "Gladiolus"){
        totalPrice *= 1.20;
    }
    else if (countFlowers > 90 && typeFlowers == "Dahlias")
    {
        totalPrice *= 0.85;
    }
    else if (countFlowers > 80 && typeFlowers == "Roses")
    {
        totalPrice *= 0.90;
    }


    cout.setf(ios::fixed);
    cout.precision(2);

    if (budget >= totalPrice){
        
        double leftMoney = budget - totalPrice;
        cout << "Hey, you have a great garden with " << countFlowers << " "<< typeFlowers << " and " << leftMoney <<" leva left." << endl;
    }
    else
    {
        double moneyNeeded = totalPrice - budget;

        cout << "Not enough money, you need " << moneyNeeded << " leva more." << endl;
    }
    return 0;
}