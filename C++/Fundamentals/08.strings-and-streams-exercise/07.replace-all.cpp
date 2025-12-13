#include <iostream>
#include <string>
#include <sstream>

using namespace std;

void findAndReplace(string &line, const string &sFind, const string &sReplace)
{
    size_t foundIdx = line.find(sFind);
    
    while (foundIdx != string::npos)
    {
        line.replace(foundIdx, sFind.length(), sReplace);
        foundIdx = line.find(sFind, foundIdx + sReplace.length());
    }
    
}
int main()
{
    string line, findWord, replace;
    getline(cin, line);
    getline(cin, findWord);
    getline(cin, replace);

    findAndReplace(line, findWord, replace);
    cout << line << endl;
    return 0;
}