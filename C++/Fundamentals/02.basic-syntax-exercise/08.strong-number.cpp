#include <iostream>

using namespace std;

int main()
{
   int number;
   cin >> number;
   
   int sum  = 0;
   int tempNumber = number;

   while (tempNumber != 0)
   {
     int num = tempNumber % 10;

     int fact = 1;

     for (int curFact = 2; curFact <= num; curFact++)
     {
        fact *= curFact;
     }
     
     sum += fact;
     tempNumber /= 10;

   }

   cout << (number == sum ? "yes": "no");

    return 0;
}