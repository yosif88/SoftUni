#include <iostream>
#include<sstream>

using namespace std;

int main()
{
    string text;
    getline(cin, text);

    ostringstream digits;
    ostringstream letters;
    ostringstream symbol;

    for (int idx = 0; idx < text.length(); idx++)
    {
        if(isdigit(text[idx]))
        {
            digits << text[idx];
        }
        else if(isalpha(text[idx]))
        {
            letters << text[idx];
        }
        else
        {
            symbol << text[idx];
        }
    }

    cout << digits.str() << endl;
    cout << letters.str() << endl;
    cout << symbol.str() << endl;


    return 0;
}