#include <iostream>
#include<list>
#include<sstream>
#include<string>


using namespace std;

void readNumbers(list<int>& numbers)
{
	string line;
	getline(cin, line);

	istringstream istr(line);

	int num;

	while (istr >> num)
	{
		numbers.push_back(num);
		
	}

}


list<int> mergeLists(const list<int>& num1, const list<int>& num2)
{
	list<int>::const_iterator it1 = num1.begin();
	list<int>::const_iterator it2 = num2.begin();
	list<int> result;

	while (it1 != num1.end() || it2 != num2.end())
	{
		if (it1 != num1.end())
		{
			result.push_back(*it1);
			it1++;
		}

		if (it2 != num2.end())
		{
			result.push_back(*it2);
			it2++;
		}

	}

	return result;
}

int main()
{
	
	list<int> num1, num2;
	

	readNumbers(num1);
	readNumbers(num2);
	
	list<int> result = mergeLists(num1, num2);

	for (int i : result)
	{
		cout << i << ' ';
	}
	cout << endl;

	return 0;

}

