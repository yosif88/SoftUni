#include <iostream>
#include <string>
#include <climits>

using namespace std;

int main()
{
    string command;
    cin >> command;

    int min = INT_MAX;

    while (command != "Stop")
    {
        int number = stoi(command);
        
        if (number < min)
        {
            min = number;
        }

        cin >> command;
    }

    cout << min;

    return 0;
}