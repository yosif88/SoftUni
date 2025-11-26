#include<iostream>
#include<sstream>

using namespace std;

int main()
{
    string word;
    getline(cin, word);

    istringstream istr(word);

    while (istr >> word)
    {
        for (int idx = 0; idx < word.length(); idx++)
        {
            cout << word;
        }
        
    }
    


    return 0;
}
