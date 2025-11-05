#include <iostream>

using namespace std;

int main()
{
    for (int number = 1; number <= 100; number ++)
    {
        if (number % 3 == 0)
        {
            cout << number << endl;
        }
    }

    return 0;
}