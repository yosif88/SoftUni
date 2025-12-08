#include <iostream>
#include<vector>
#include<sstream>
#include<string>
#include<algorithm>

using namespace std;

void readNumbers(vector<int>& numbers)
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

void printResult(vector<int>& result)
{
	for (int i : result)
	{
		cout << i << ' ';
	}
	cout << endl;
}

int main()
{
	
	vector<int> numbers;

	readNumbers(numbers);
	vector<int> result;

	

	for (int from = 0, to = numbers.size()-1;from<=to; from++, to--)

	{
		int calc = from != to ? numbers[from] + numbers[to]: numbers[from];
		result.push_back(calc);
	}

	printResult(result);
	

	return 0;

}

