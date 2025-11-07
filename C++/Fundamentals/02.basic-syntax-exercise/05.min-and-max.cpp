#include <iostream>
#include <climits>

using namespace std;

int main()
{
    int n;
    cin >> n;
    
    int maxNum = INT_MIN;
    int minNum = INT_MAX;

    for (int i = 0; i < n; i++)
    {
        int number;
        cin >> number;

        if (number > maxNum)
        {
            maxNum = number;
        }

        if (number < minNum)
        {
            minNum = number;
        }
    }

    cout << minNum << ' ' << maxNum << endl;

    return 0;
}