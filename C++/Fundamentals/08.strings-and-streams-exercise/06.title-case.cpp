#include <iostream>
#include <sstream>
#include <cctype>

using namespace std;

string capitalize(const string &text)
{
    istringstream istr(text);
    ostringstream ostr;

    char ch;
    bool bCapitalize = true;

    while (istr.get(ch))
    {
        if (isalpha(ch))
        {
            if (bCapitalize)
            {
                ch = toupper(ch);
                bCapitalize = false;
            }
        }
        else
        {
            bCapitalize = true;
        }
        ostr << ch;
    }

    return ostr.str();
}
int main()
{
    string text;
    getline(cin, text);

    cout << capitalize(text) << endl;

    return 0;
}