#include <iostream>

using namespace std;

int main()
{
    int count;
    cin >> count;

    int sum = 0;

    for (int i = 0; i < count; i++)
    {
        int number;
        cin >> number;
        sum += number;
    }

    cout << sum << endl;

    return 0;
    
}