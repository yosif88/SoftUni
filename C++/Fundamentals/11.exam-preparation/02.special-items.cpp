#include <iostream>
#include<vector>
#include<sstream>


using namespace std;

bool isSpecialChar(char c)
{
	return c == 'a' ||
		c == 'e' ||
		c == 'i' ||
		c == 'u' ||
		c == 'o';
}

int main()
{
	string text;
	getline(cin, text);

	istringstream istr(text);
	ostringstream output;
	
	char lastChar = 0;
	char curChar;

	while (istr.get(curChar))
	{
		if (curChar != lastChar)
		{
			lastChar = curChar;
			output << curChar;
		}
		else
		{
			if (isSpecialChar(curChar))
			{
				output << curChar;
			}
		}
	}

	cout << output.str() << endl;
	
	return 0;

}

