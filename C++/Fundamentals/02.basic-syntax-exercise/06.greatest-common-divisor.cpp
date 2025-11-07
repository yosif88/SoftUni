#include <iostream>

using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;

    if (a > b)
    {
        swap(a, b);
    }

    while (a != 0)
    {
        int remainder = b % a;
        b = a;
        a = remainder;
    }

    int gcd = b;

    cout << gcd << endl;

    return 0;
}