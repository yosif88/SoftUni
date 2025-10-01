#include <iostream>
#include <string>
#include <climits>

using namespace std;

int main()
{
    string command;
    cin >> command;

    int max = INT_MIN;

    while (command != "Stop")
    {
        int number = stoi(command);
        
        if (number > max)
        {
            max = number;
        }

        cin >> command;
    }

    cout << max;

    return 0;
}