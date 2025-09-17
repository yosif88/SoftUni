#include <iostream>

using namespace std;

int main()
{
    int number;
    cin >> number;

    bool isValid = (number >= 100 && number <= 200) || number == 0;

    if (!isValid)
    {
        cout << "invalid" << endl;
    }

    return 0;
}