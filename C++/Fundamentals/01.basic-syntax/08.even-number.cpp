#include <iostream>

using namespace std;

int main()
{
    int number;
    cin >> number;

    while (number % 2 != 0)
    {

        cout << "Please write an even number." << endl;

        cin >> number;
    }
    
    cout << "The number is: " << abs(number) << endl;
    return 0;
}