#include<iostream>

using namespace std;

int main()
{
    string searchWord, word;
    getline(cin, searchWord);
    getline(cin, word);

    int index = word.find(searchWord);
    
    while(index != string::npos)
    {
        word.erase(index, searchWord.size());
        index = word.find(searchWord);
    }

    cout << word << endl;
    return 0;
}