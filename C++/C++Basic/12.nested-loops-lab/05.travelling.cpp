#include <iostream>

using namespace std;

int main()
{
    string destination;
    
    while (cin >> destination && destination != "End")
    {
        int neededMoney;
        cin >> neededMoney;

        double saveMoney = 0;

        while (saveMoney < neededMoney)
        {
            double amount;
            cin >> amount;

            saveMoney += amount;
        }

        cout << "Going to " << destination << "!" << endl;
    }

    return 0;
}