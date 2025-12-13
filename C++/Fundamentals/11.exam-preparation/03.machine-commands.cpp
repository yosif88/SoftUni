#include <iostream>
#include<list>
#include<sstream>


using namespace std;


int main()
{
	string command;
	getline(cin, command);

	list<int> numbers;

	while (command != "end")
	{
		istringstream input(command);
		ostringstream output;

		if (command == "sum") {
			int numOne = numbers.back();
			numbers.pop_back();

			int numSecond = numbers.back();
			numbers.pop_back();
			numbers.push_back(numOne + numSecond);

		}
		else if (command == "subtract")
		{
			int numOne = numbers.back();
			numbers.pop_back();

			int numSecond = numbers.back();
			numbers.pop_back();

			numbers.push_back(numOne - numSecond);
			

		}

		else if (command == "concat")
		{
			int numOne = numbers.back();
			numbers.pop_back();

			int numSecond = numbers.back();
			numbers.pop_back();

			output << numSecond << numOne;
			
			int num;
			istringstream istr(output.str());
			istr >> num;

			numbers.push_back(num);
		}

		else if (command == "discard")
		{
			numbers.pop_back();
		}
		else
		{
			int num;
			input >> num;
			numbers.push_back(num);

		}
		getline(cin, command);
	}

	for (int i : numbers)
	{
		cout << i << endl;
	}
	
	return 0;

}

