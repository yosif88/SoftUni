#include <iostream>
#include <cctype>

using namespace std;

bool checkPasswordLength(string password)
{
    if (password.length() < 6 || password.length() > 10)
    {
        return false;
    }
    return true;
}

void checkPasswordContent(string password, bool &bValid, int &digits)
{
    bValid = true;
    digits = 0;

    for (int cur = 0; cur < password.length(); cur++)
    {
        char curChar = password[cur];
        if (isdigit(curChar))
        {
            digits++;
        }
        else
        {
            if (isalpha(curChar) == 0)
            {
                bValid = false;
            }
        }
    }
}

void checkPassword(string password)
{
    bool contentValid;
    int digits;

    bool isValidLen = checkPasswordLength(password);

    checkPasswordContent(password, contentValid, digits);

    if(!isValidLen)
    {
        cout << "Password must be between 6 and 10 characters" << endl;
    }
    if (!contentValid)
    {
        cout << "Password must consist only of letters and digits" << endl;
    }
    if (digits < 2)
    {
        cout << "Password must have at least 2 digits" << endl;
    }

    if (isValidLen && contentValid && digits >= 2)
    {
        cout << "Password is valid" << endl;
    }
    
}

int main()
{
    string password;
    cin >> password;
    checkPassword(password);
    return 0;
}