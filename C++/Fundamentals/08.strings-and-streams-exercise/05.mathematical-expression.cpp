#include <iostream>
#include <string>
#include <sstream>

using namespace std;

bool isValidExpression(const string &expression)
{
    istringstream istr(expression);
    char c;
    int openBrackets = 0;

    while (istr >> c)
    {
        switch (c)
        {
        case '(':
            openBrackets++;
            break;
        case ')':
            if(openBrackets == 0)
            {
                return false;
            }
            openBrackets--;
            break;
        }
    }

    return openBrackets == 0;
    
}

int main()
{
    string expression;
    getline(cin, expression);

    cout << (isValidExpression(expression) ? "correct" : "incorrect") << endl;
    return 0;
}