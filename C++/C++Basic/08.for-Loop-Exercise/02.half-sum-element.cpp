#include <iostream>
#include <climits>

using namespace std;

int main()
{
    int count;
    cin >> count;

    int sum = 0;
    int max = INT_MIN;

    for (int i = 0; i < count; i++)
    {
        int number;
        cin >> number;

       if (number > max)
       {
            max = number;
       }

        sum += number;
    }

    int sumDiff = sum - max;
    
    if (sumDiff == max)
    {
        cout << "Yes" << endl << "Sum = " << max << endl;
    }
    else
    {
        cout << "No" << endl << "Diff = " << abs(max - sumDiff) << endl;
    }

    return 0;
}