#include <iostream>

using namespace std;

int main()
{
    int count;
    cin >> count;

    int evenSum = 0;
    int oddSum = 0;

    for (int i = 0; i < count; i++)
    {
        int number;
        cin >> number;

        if (i % 2 == 0){
            evenSum += number;
        }
        else
        {
            oddSum += number;
        }
    }
    
    if (evenSum == oddSum)
    {
        cout << "Yes" << endl << "Sum = " << evenSum << endl;
    }
    else
    {
        cout << "No" << endl << "Diff = " << abs(evenSum-oddSum) << endl;
    }

    
    return 0;
}