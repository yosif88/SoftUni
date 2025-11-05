#include <iostream>

using namespace std;

int main()
{
    int n;
    cin >> n;
    int sumOdd = 0;
    int count = 1;

    for (int number = 1; number <= n; number ++)
    {
        sumOdd += count;
        cout << count << endl;
        
        count += 2;
    }

    cout << "Sum: " << sumOdd << endl;

    return 0;
}