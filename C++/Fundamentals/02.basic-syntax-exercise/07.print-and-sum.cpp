#include <iostream>

using namespace std;

int main()
{
    int start, end;
    cin >> start >> end;

    int sum = 0;

    for (int num = start; num <= end; num++)
    {
        sum += num;
        cout << num << ' ';
    }
    
    cout << endl;

    cout << "Sum: " << sum << endl;
    
    
    return 0;
}