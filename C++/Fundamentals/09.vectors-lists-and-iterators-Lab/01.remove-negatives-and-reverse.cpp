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

void removeNegativeNumbers(list<int>& numbers) {
	list<int>::iterator it = numbers.begin();

	while (it != numbers.end())
	{
		if (*it >= 0)
		{
			it++;
		}
		else
		{
			it = numbers.erase(it);
		}
	}


}

void reversePrint(const list<int>& numbers)
{
	if (numbers.size() == 0)
	{
		cout << "empty" << endl;
		return;
	}

	list<int>::const_iterator it = numbers.end();
	it--;

	while (true)
	{
		cout << *it << ' ';
		if (it == numbers.begin())
		{
			break;
		}
		it--;

	}

	cout << endl;
}

int main()
{
	list<int> numbers;

	readNumbers(numbers);
	removeNegativeNumbers(numbers);
	reversePrint(numbers);

	return 0;

}

