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


void manipulationNumbers(vector<int>& nums)
{
	string line;
	getline(cin, line);

	while (line != "end")
	{
		string command;
		int number;

		istringstream istr(line);

		istr >> command >> number;

		if (command == "Add")
		{
			nums.push_back(number);
		}
		else if (command == "Remove")
		{
			vector<int>::iterator itFound = find(nums.begin(), nums.end(), number);
			if (itFound != nums.end())
				nums.erase(itFound);

		}
		else if (command == "RemoveAt")
		{
			nums.erase(nums.begin() + number);
		}
		else if (command == "Insert")
		{
			int index;

			istr >> index;

			nums.insert(nums.begin() + index, number);
		}

		getline(cin, line);

	}

	for (int i : nums)
	{
		cout << i << ' ';
	}
	cout << endl;

}


int main()
{
	
	vector<int> nums;
	

	readNumbers(nums);
	
	manipulationNumbers(nums);
	
	

	return 0;

}

