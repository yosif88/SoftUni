#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int count;
    cin >> count;

    for (int i = 0; i <= count; i+= 2)
    {
        cout << pow(2, i) << endl;
    }
    
    return 0;
}