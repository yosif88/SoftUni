#include <iostream>

using namespace std;

int main()
{
    for (int hour = 0; hour < 24; hour++)
    {
        for (int minute = 0; minute < 60; minute++)
        {
            cout << hour << ":" << minute << endl;
        }
        
    }
    
    return 0;
}