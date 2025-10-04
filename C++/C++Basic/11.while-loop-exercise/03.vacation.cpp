#include <iostream>
#include <string>

using namespace std;

int main()
{
    double neededMoney, ownedMoney;
    cin >> neededMoney >> ownedMoney;

    int days = 0;
    int spentCount = 0;


    while (ownedMoney < neededMoney && spentCount < 5)
    {
        string command;
        cin >> command;

        double money;
        cin >> money;

        if (command == "save")
        {
            ownedMoney += money;
            spentCount = 0;
        }
        else if (command == "spend")
        {
            ownedMoney -= money;
            spentCount ++;
            
            if (ownedMoney < 0)
            {
                ownedMoney = 0;
            }
        }
        
        days ++;

    }


    if (spentCount == 5)
    {
        cout << "You can't save the money." << endl;
        cout << days << endl;
    }
    else
    {
        cout << "You saved the money for " << days << " days." << endl;
    }
    return 0;
}