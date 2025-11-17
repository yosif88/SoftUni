#include <iostream>

using namespace std;

int extractDigit(int &n)
{
   
    int result = n % 10;
    n /= 10;
    return result;
}

void multiplyEvenNumbersByOdd(int n)
{
    int sumOdd = 0, sumEven = 0;

    while(n != 0)
    {
        int currentDigit = extractDigit(n);
        if(currentDigit % 2 == 0)
        {
            sumEven += currentDigit;
        }
        else
        {
            sumOdd += currentDigit;
        }
    }
    cout << sumEven * sumOdd << endl;
}

int main()
{
    int n;
    cin >> n;
    
    multiplyEvenNumbersByOdd(n);
    
    return 0;
}