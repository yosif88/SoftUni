#include <iostream>

using namespace std;

int main()
{
    double age;
    cin >> age;

    char gender;
    cin >> gender;

    if (age >= 16)
    {
        if (gender == 'm')
        {
            cout << "Mr." << endl;
        }
        else
        {
            cout << "Ms." << endl;
        }
    }
    else if (age < 16)
    {
        if (gender == 'm')
        {
            cout << "Master" << endl;
        }
        else
        {
            cout << "Miss" << endl;
        }
    }

    return 0;
}