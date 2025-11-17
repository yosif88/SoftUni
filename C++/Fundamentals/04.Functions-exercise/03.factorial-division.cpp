#include <iostream>
#include <iomanip>

using namespace std;

long factorial(int n)
{
    long result = 1;

    while (n > 0)
    {
        result *= n;
        n--;
    }
    // for (int i= 2; i <= n; i++)
    // {
    //     result *= i;
    // }

    return result;
}

int main()
{
    int num1, num2;
    cin >> num1 >> num2;

    long fact1 = factorial(num1);
    long fact2 = factorial(num2);

    cout << fixed << setprecision(2) << double(fact1) / fact2 << endl;

    return 0;
}