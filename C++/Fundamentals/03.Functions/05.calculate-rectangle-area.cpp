#include <iostream>

using namespace std;

int calculateRectangleArea(int a, int b);

int main()
{
    int a, b;
    cin >> a >> b;

    cout << calculateRectangleArea(a, b);
    
    return 0;
}

int calculateRectangleArea(int a, int b)
{
    return a * b;
}