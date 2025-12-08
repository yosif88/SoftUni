#include <iostream>
#include <vector>
#include <sstream>

using namespace std;

void readVector(string expressionLine, vector<char> &exp)
{
    for (char c : expressionLine)
    {
        exp.push_back(c);
    }
}

bool isValidExpression(const vector<char> &exp)
{
    size_t squareBrackets = 0;
    size_t roundBrackets = 0;
    size_t curlyBrackets = 0;

    for (vector<char>::const_iterator itCur = exp.begin(); itCur != exp.end(); itCur++)
    {
        char c = *itCur;

        switch (c)
        {
        case '(':
            roundBrackets++;

            break;
        case ')':
            if (roundBrackets == 0)
            {
                return false;
            }
            roundBrackets--;

            break;
        case '[':
            if (roundBrackets != 0)
            {
                return false;
            }
            squareBrackets++;
            break;
        case ']':
            if (squareBrackets == 0)
            {
                return false;
            }
            if (roundBrackets != 0)
            {
                return false;
            }
            squareBrackets--;

            break;
        case '{':
                if(roundBrackets != 0)
                {
                    return false;
                }
                if (squareBrackets != 0)
                {
                    return false;
                }
                curlyBrackets++;
            break;
        case '}':
                if(curlyBrackets == 0)
                {
                    return false;
                }
                if (roundBrackets != 0 || squareBrackets != 0)
                {
                    return false;
                }
                curlyBrackets--;
            break;
        default:
            return false;
        }
    }

    return roundBrackets == 0 && squareBrackets == 0 && curlyBrackets == 0;
}
int main()
{
    string expressionLine;
    getline(cin, expressionLine);

    vector<char> expression;
    expression.reserve(expressionLine.length());

    readVector(expressionLine, expression);

    cout << (isValidExpression(expression) ? "valid" : "invalid") << endl;
    return 0;
}