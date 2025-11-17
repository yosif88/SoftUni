#include <iostream>

using namespace std;


bool isVowel(char chr)
{
    switch (chr)
    {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'y':
        case 'o':
        case 'A':
        case 'E':
        case 'U':
        case 'I':
        case 'Y':
        case 'O':
           return true;
        default: 
           return false;
    }
   
}
int countVowels(string str)
{
    int vowels = 0;

    for (int i = 0; i < str.length(); i++)
    {
        if(isVowel(str[i]))
        {
            vowels++;
        }
    }
    return vowels;
    
} 

int main()
{
    string text;
    cin >> text;

    cout << countVowels(text) << endl;
    
    return 0;
}