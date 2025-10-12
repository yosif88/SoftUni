#include <iostream>
#include <string>

using namespace std;

int main()
{
    string command;

    int sumPrime = 0;
    int sumNonPrice = 0;
    
    while (cin >> command && command != "stop")
    {
        int num = stoi(command);
       
        
        bool isPrime = true;

        if (num < 0)
        {
            cout <<"Number is negative." << endl;
            continue;
        }

        for (int i = 2; i < num; i++)
        {
            if (num % i == 0)
            {
                isPrime = false;
            }
        }

        if(!isPrime)
        {
            sumNonPrice += num;
        }
        else
        {
            sumPrime += num;
        }
        
    }
    cout << "Sum of all prime numbers is: "<< sumPrime << endl;
    cout << "Sum of all non prime numbers is: "<< sumNonPrice << endl;
    return 0;
}