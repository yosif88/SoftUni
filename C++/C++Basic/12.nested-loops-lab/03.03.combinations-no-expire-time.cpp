#include <iostream>

using namespace std;

int main ()
{
    int n;
    cin >> n;

    int count = 0;

    for (int numOne = 0; numOne <= n; numOne++)
    {
        for (int numTwo = 0; numTwo <= n; numTwo++)
        {
            for (int numThree = 0; numThree <= n; numThree++)
            {
                if (numOne + numTwo + numThree == n)
                {
                    count ++;
                }
            }
            
        }
        
    }
    
    cout << count;

    return 0;
    
}