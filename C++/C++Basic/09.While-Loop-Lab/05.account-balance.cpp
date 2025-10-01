#include <iostream>
#include <string>

using namespace std;

int main()
{
    string command;
    cin >> command;

    double totalSum = 0;

    cout.setf(ios::fixed);
    cout.precision(2);
    
    while (command != "NoMoreMoney")
    {
        double money = stod(command);

        if (money < 0)
        {
            cout << "Invalid operation!" << endl;
            break;
        }
        else
        {
            cout << "Increase: " << money << endl;
        }

        totalSum += money;

        cin >> command;
    }

    cout << "Total: " << totalSum << endl;
    return 0;
}