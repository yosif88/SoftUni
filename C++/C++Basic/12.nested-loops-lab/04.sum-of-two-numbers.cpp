#include <iostream>

using namespace std;

int main()
{
    int start;
    cin >> start;

    int end;
    cin >> end;

    int magicNumber;
    cin >> magicNumber;

    int count = 0;

    for (int numOne = start; numOne <= end; numOne++)
    {
        for (int numTwo = start; numTwo <= end; numTwo++)
        {
            count ++;

            if (numOne + numTwo == magicNumber)
            {
                cout << "Combination N:" << count << " (" << numOne << " + " << numTwo << " = " << numOne + numTwo << ")" << endl;
                return 0;
            }
        }
    }

    cout << count << " combinations - neither equals " << magicNumber << endl;
}