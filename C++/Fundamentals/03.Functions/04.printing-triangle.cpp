#include <iostream>

using namespace std;

void printTopSideTriangle(int n);
void printBottomSideTriangle(int n);
void printTriangle(int n);

int main()
{
    int n;
    cin >> n;

    printTriangle(n);

    return 0;
}

void printTriangle(int n)
{
    printTopSideTriangle(n);
    printBottomSideTriangle(n);
}

void printTopSideTriangle(int n)
{
    for (int row = 1; row <= n; row++)
    {
        for(int col= 1; col < row; col++)
        {
            cout << col << ' ';
        }
        cout << endl;
    }
}

void printBottomSideTriangle(int n)
{
    for (int row = n; row >= 1; row--)
    {
        for (int col = 1; col <= row; col++)
        {
            cout << col << ' ';
        }
        cout << endl;
    }
}