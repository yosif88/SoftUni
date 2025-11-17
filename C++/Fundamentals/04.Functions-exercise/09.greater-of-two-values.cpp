#include <iostream>
#include <string>

using namespace std;

void compareInts()
{
    int a, b;
    cin >> a >> b;

    if (a > b)
    {
        cout << a;
    }
    else
    {
        cout << b;
    }
}

void compareChars()
{
    char a, b;
    cin >> a >> b;

    if (a > b)
    {
        cout << a;
    }
    else
    {
        cout << b;
    }
}

void compareString()
{
    string a, b;

    getline(cin, a);
    getline(cin, b);

    if (a > b)
    {
        cout << a;
    }
    else
    {
        cout << b;
    }
}

int main()
{
    string type;
    cin >> type;
    cin.ignore();

    if (type == "int")
    {
        compareInts();
    }
    if (type == "char")
    {
        compareChars();
    }
    else if (type == "string")
    {
        compareString();
    }

    cout << endl;
    
    return 0;
}