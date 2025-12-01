#include <iostream>
#include <string>
#include<cctype>

using namespace std;

string getNextUserName(string &line)
{
    if (line.length() == 0)
    {
        return "";
    }
    string result;

    int divider = line.find(", ");

    if (divider == string::npos)
    {
        result = line;
        line.erase();
    }
    else
    {
        result = line.substr(0, divider);
        line.erase(0, divider + 2);
    }

    return result;
}

bool isValidUserName(const string & userName)
{
    if(userName.length() < 3 || userName.length() > 16)
    {
        return false;
    }
    
    for (int i = 0; i < userName.length(); i++)
    {
        char chr = userName[i];

        if (!(isalnum(chr) || chr == '_' || chr == '-'))
        {
            return false;
        }
    }
    return true;
    
}
int main()
{
    string line;
    getline(cin, line);

    string userName = getNextUserName(line);

    while(userName.length())
    {
        if (isValidUserName(userName))
        {
            cout << userName << endl;

        }

        userName = getNextUserName(line);
    }

    return 0;
}