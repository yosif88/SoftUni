#include <iostream>

using namespace std;

int main()
{
    int ages;
    double washingMachine;
    int priceToy;

    cin >> ages;
    cin >> washingMachine;
    cin >> priceToy;

    double price = 10.0;
    int countToys = 0;
    int totalSum = 0;
    int a = 4;

    for (int age = 1; age <= ages; age++)
    {
        if (age % 2 == 0)
        {
            totalSum += price;
            price += 10;
            totalSum -= 1;

        }
        else
        {
           countToys ++;
        }
    }
    
    totalSum += countToys * priceToy;

    cout.setf(ios::fixed);
    cout.precision(2);

    if (totalSum >= washingMachine)
    {
        cout <<"Yes! " << abs (totalSum-washingMachine) << endl;
    }
    else
    {
        cout << "No! " << abs(totalSum - washingMachine) << endl;
    }

    return 0;
}