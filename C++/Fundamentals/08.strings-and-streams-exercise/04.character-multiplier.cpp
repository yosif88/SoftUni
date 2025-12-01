#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int calculateStringSum(const string &s1, const string & s2)
{
    int result = 0;
    int maxLen = max(s1.length(), s2.length());

    for (int i = 0; i < maxLen; i++)
    {
        if (i < s1.length() && i < s2.length())
        {
            result += s1[i] * s2[i];
        }
        else if (i < s1.length())
        {
            result += s1[i];
        }
        else
        {
            result += s2[i];
        }
    }
    
    return result;

}

int main()
{
    string first, second;
    cin >> first >> second;

    int sum = calculateStringSum(first, second);

    cout << sum << endl;

    return 0;
}