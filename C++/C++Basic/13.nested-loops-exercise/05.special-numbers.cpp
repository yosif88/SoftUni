#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;

    for (int numOne = 1; numOne < 10; numOne++)
    {
        for (int numTwo = 1; numTwo < 10; numTwo++)
        {
            for (int numThree = 1; numThree < 10; numThree++)
            {
                for (int numFour = 1; numFour < 10; numFour++)
                {
                    if (n % numOne == 0 && n % numTwo == 0 && n % numThree == 0 && n % numFour == 0)
                    {
                        cout << numOne << numTwo << numThree << numFour << " ";
                    }
                }
            }
        }
    }
}