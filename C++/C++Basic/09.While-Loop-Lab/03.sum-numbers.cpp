#include <iostream>

using namespace std;

int main()
{
    int number;
    cin >> number;

    int digit;

    int sum = 0;
    while(sum < number)
    {
        cin >> digit;
        sum += digit;
    }

    cout << sum << endl;

    return 0;
}