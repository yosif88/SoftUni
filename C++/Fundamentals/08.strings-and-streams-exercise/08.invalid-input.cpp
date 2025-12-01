#include <iostream>
#include <string>
#include <sstream>

using namespace std;

int main()
{
    string line;
    getline(cin, line);

    istringstream istr(line);
    ostringstream words;
    string token;
    int sum = 0;

    while (istr >> token)
    {
        istringstream numberConvector(token);
        int number;
        if (numberConvector >> number)
        {
            sum += number;
        }
        else
        {
            words << token << ' ';
        }
    }
    
    cout << sum << endl;
    cout << words.str() << endl;

    return 0;
}