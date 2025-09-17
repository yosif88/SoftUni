#include <iostream>
#include <string>

using namespace std;

int main()
{
    string dayOfWeek;
    cin >> dayOfWeek;

    if (dayOfWeek == "Monday" 
        || dayOfWeek == "Tuesday" 
        || dayOfWeek == "Wednesday"
        || dayOfWeek == "Thursday"
        || dayOfWeek == "Friday" 
    )
    {
        cout << "Working day" << endl;
    }
    else if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday")
    {
        cout << "Weekend" << endl;
    }
    else
    {
        cout << "Error" << endl;
    }
    
}