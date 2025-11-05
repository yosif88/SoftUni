#include <iostream>

using namespace std;

int main()
{
    int number;
    cin >> number;

    for (int times = 1; times <= 10; times++)
    {
        cout << number << " X " << times << " = " << number * times << endl;
    }
    
    return 0;
}