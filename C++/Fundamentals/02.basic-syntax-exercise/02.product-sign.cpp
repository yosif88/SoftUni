#include <iostream>

using namespace std;

int main()
{
    float a, b, c;
    cin >> a >> b >> c;

    int negatives = 0;

    if (a != 0 && b != 0 && c != 0)
    {
        if (a < 0)
        {
            negatives ++;
        }
        if (b < 0)
        {
            negatives ++;
        }
        if (c < 0)
        {
            negatives ++;
        }

    }

    cout << (negatives % 2 == 0 ? '+': '-');

    return 0;
}