#include <iostream>

using namespace std;

int minNumber(int a, int b)
{
    return a < b ? a : b;
}

int minNumber(int a, int b, int c)
{
    return minNumber(a, minNumber(b, c));
}

int main()
{
    int a, b, c;
    cin >> a >> b >> c;

    cout << minNumber(a, b, c) << endl;

    return 0;
}



// int checkNum(int a, int b, int c)
// {
//     if (a < b && a < c)
//     {
//         return a;
//     }
//     if (b < a && b < c)
//     {
//         return b;
//     }
//     return c;
// }