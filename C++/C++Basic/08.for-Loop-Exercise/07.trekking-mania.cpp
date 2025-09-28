#include <iostream>

using namespace std;

int main()
{
    int climberGroupCount;
    cin >> climberGroupCount;

    int totalClimberCount = 0;
    int climbersMussalla = 0;
    int climbersMontBlanc = 0;
    int climbersKilimanjaro = 0;
    int climbersK2 = 0;
    int climbersEverest = 0;

    for (int i = 1; i <= climberGroupCount; i++)
    {
        int climberCount;
        cin >> climberCount;

        totalClimberCount += climberCount;

        if (climberCount <= 5)
        {
            climbersMussalla += climberCount;
        }
        else if (climberCount <= 12)
        {
            climbersMontBlanc += climberCount;
        }
        else if (climberCount <= 25)
        {
            climbersKilimanjaro += climberCount;
        }
        else if (climberCount <= 40)
        {
            climbersK2 += climberCount;
        }
        else if (climberCount >= 41)
        {
            climbersEverest += climberCount;
        }
    }

    double percentClimberMusalla = (climbersMussalla * 1.0 / totalClimberCount ) * 100.0;
    double percentClimberMontBlanc = (climbersMontBlanc * 1.0 / totalClimberCount) * 100.0;
    double percentClimberKilimanjaro = (climbersKilimanjaro * 1.0 / totalClimberCount) * 100.0;
    double percentClimberK2 = (climbersK2 * 1.0 / totalClimberCount) * 100.0;
    double percentClimberEverest = (climbersEverest * 1.0 / totalClimberCount) * 100.0;
    
    cout.setf(ios::fixed);
    cout.precision(2);

    cout << percentClimberMusalla << "%" << endl;
    cout << percentClimberMontBlanc << "%" << endl;
    cout << percentClimberKilimanjaro << "%" << endl;
    cout << percentClimberK2 << "%" << endl;
    cout << percentClimberEverest<< "%" << endl;

    return 0;
}