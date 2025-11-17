#include <iostream>

using namespace std;

int add(int num1, int num2)
{
    return num1 + num2;
}

int subtraction(int num1, int num2)
{
    return num1 - num2;
}

int multiplication(int num1, int num2)
{
    return num1 * num2;
}

int division(int num1, int num2)
{
    return num1 / num2;
}

int main()
{
    int num1, num2;
    cin >> num1 >> num2;

    char operation;
    cin >> operation;

    switch (operation)
    {
    case '+':
        cout << add(num1, num2) << endl;
        break;
    case '-':
        cout << subtraction(num1, num2) << endl;
        break;
    case '*':
        cout << multiplication(num1, num2) << endl;
        break;
    case '/':
        cout << division(num1, num2) << endl;
        break;

        return 0;
    }
}