#include <iostream>

using namespace std;

int calculatePow(int number, int power);

int main()
{
    int number, power;
    cin >> number >> power;

    cout << calculatePow(number,power) << endl;
    return 0;
}

int calculatePow(int number, int power)
{
    int result = 1;

    while(power > 0)
    {
         result *= number;
        power--;
    }
    return result;
}