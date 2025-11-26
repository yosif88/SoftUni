#include <iostream>
#include <sstream>

using namespace std;

string reverseString(string words)
{
    ostringstream ostr;

    for (int idx = words.length() - 1; idx >= 0; idx--)
    {
        ostr << words[idx];
    }
    return ostr.str();
}

int main()
{
    string words;
    getline(cin, words);

    while (words != "end")
    {

        cout << words << " = " << reverseString(words) << endl;
        getline(cin, words);
    }

    return 0;
}