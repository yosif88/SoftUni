#include <iostream>
#include <string>

using namespace std;

int main()
{
    int num1, num2;
    char op;

    cin >> num1 >> num2;
    cin >> op;

    bool isEven;

    cout.setf(ios::fixed);
    cout.precision(2);

    if (num2 == 0 && op == '/')
    {
        cout << "Cannot divide " << num1 << " by zero" << endl;
    }
    else if (num2 == 0 && op == '%')
    {
        cout << "Cannot divide " << num1 << " by zero" << endl;
    }

    else if (op == '+')
    {
        int sum = num1 + num2;
        if (sum % 2 == 0)
        {
            cout << num1 << " " << op << " "<< num2 << " = " << sum << " - " << "even" << endl;
        }
        else
        {
            cout << num1 <<  " " << op << " " << num2 << " = " << sum << " - " << "odd" << endl;
        }
    }
    else if (op == '-')
    {
        int diff = num1 - num2;

        if (diff % 2 == 0)
        {
            cout << num1 <<  " " << op << " " << num2 << " = " << diff << " - " << "even" << endl;
        }
        else
        {
            cout << num1 <<  " " << op << " " << num2 << " = " << diff << " - " << "odd" << endl;
        }
    }
    else if (op == '*')
    {
        int multiplies = num1 * num2;

        if (multiplies % 2 == 0)
        {
            cout << num1 <<  " " << op << " " << num2 << " = " << multiplies << " - " << "even" << endl;
        }
        else
        {
            cout << num1 <<  " " << op << " " << num2 << " = " << multiplies << " - " << "odd" << endl;
        }
    }
    else if (op == '/')
    {
        double divide = (num1 * 1.0) / num2;

        cout << num1 <<  " " << op << " " << num2 << " = " << divide << endl;
    }
    else if (op == '%')
    {
        int leftover = num1 % num2;
        cout << num1 <<  " " << op << " " << num2 << " = " << leftover << endl;
    }

    return 0;
}