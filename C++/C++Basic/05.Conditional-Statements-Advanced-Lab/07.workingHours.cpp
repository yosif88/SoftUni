#include <iostream>
#include <string>

using namespace std;

int main()
{
    int hour;
    string dayOfWeek;

    cin >> hour;
    cin >> dayOfWeek;

    if (hour < 10 || hour > 18 || dayOfWeek == "Sunday")
    {
        cout << "closed" << endl;
    }
    else {
        cout << "open" << endl;
    }

    return 0;
}
