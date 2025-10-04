#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

int main()
{
    const int targetStep = 10000;
    int step = 0;


    while(step < targetStep)
    {
        string command;
        getline(cin, command);

        int currentStep;
        
        
        if (command == "Going home")
        {
            cin >> currentStep;
            step += currentStep;
            break;
        }
        else
        {
            currentStep = stoi(command);
            step += currentStep;
        }

    }

    if (step >= targetStep)
    {
        cout << "Goal reached! Good job!" << endl;
    }
    else
    {
        cout << targetStep - step << " more steps to reach goal." << endl;
    }

    return 0;
}