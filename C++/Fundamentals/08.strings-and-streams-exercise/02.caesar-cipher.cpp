#include<iostream>
#include<string>

using namespace std;

void encrypt(string & line)
{
    for (int i = 0; i < line.size(); i++)
    {
        line[i] += 3;
    }
    
}

int main()
{
    string line;
    getline(cin, line);

    encrypt(line);

    cout << line << endl;


    return 0;
}