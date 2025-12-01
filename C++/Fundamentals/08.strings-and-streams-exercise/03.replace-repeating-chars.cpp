#include <iostream>
#include <string>
#include <sstream>

using namespace std;

string replaceRepeatingChar(const string &words)
{
    istringstream istr(words);
    ostringstream ostr;

    char previous = 0;
    char curr;

    while (istr >> curr)
    {
        if (curr != previous)
        {
            ostr << curr;
            previous = curr;
        }
    }
    return ostr.str();
}
int main()
{
    string words;
    getline(cin, words);

    string result = replaceRepeatingChar(words);
    cout << result << endl;
    return 0;
}