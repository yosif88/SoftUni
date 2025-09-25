#include <iostream>
#include <string>

using namespace std;

int main()
{
    int countTabs, salary;
    cin >> countTabs >> salary;

    for (int tab = 1; tab <= countTabs; tab++)
    {
        string site;
        cin >> site;

        if (site == "Facebook")
        {
            salary -= 150;
        }
        else if (site == "Instagram")
        {
            salary -= 100;
        }
        else if (site == "Reddit")
        {
            salary -= 50;
        }

        if (salary <= 0)
        {
            cout << "You have lost your salary." << endl;
            break;
        }
    }

    if (salary > 0)
    {
        cout << salary << endl;
    }

    return 0;
}