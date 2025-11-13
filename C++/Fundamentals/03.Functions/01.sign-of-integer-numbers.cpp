#include <iostream>

using namespace std;

void printSing(int n);

int main()
{
    int n;
    cin >> n;

    printSing(n);

    return 0;
}

void printSing(int n)
{
    if (n > 0)
    {
        cout << "The number " << n << " is positive." << endl;
    }
    else if (n < 0)
    {
        cout << "The number " << n << " is negative." << endl;
    }
    else
    {
        cout << "The number " << n <<" is zero." << endl;
    }
}