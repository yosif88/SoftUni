#include <iostream>
#include <string>

using namespace std;

int main()
{
    int start, end;
    cin >> start >> end;

    string result = "";

    for (int number = start; number <= end; number++)
    {
        string currentNum = to_string(number);
        int sumEven = 0;
        int sumOdd = 0;
        
        for (int i = 0; i < currentNum.length(); i++)
        {
            int digit = currentNum[i] - '0';
            int position = i + 1;

            if (position % 2 == 0)
            {
                sumEven += digit;
            }
            else
            {
                sumOdd += digit;
            }
        }

        if (sumEven == sumOdd)
        {
            result += currentNum + " ";
        }

        
    }
    cout << result;
    
    return 0;
    
}