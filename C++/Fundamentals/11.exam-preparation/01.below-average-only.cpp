#include <iostream>
#include<vector>
#include<list>



using namespace std;

void readVector(istream & is, vector<int>& numbers, size_t N)
{

	for (size_t i = 0; i < N; i++)
	{
		is >> numbers[i];
	}
	

}

int calculateAverage(vector<int>& nums, size_t & N)
{
	int average = 0;

	for (int i : nums)
	{
		average += i;
	}

	return average / N;

}

void findElementBellowAverage(vector<int>& numbers, int average)
{
	for (vector<int>::iterator it = numbers.begin(); it != numbers.end();)
	{
		if (*it > average)
			it = numbers.erase(it);
		else
			it++;
	}

}

int calculateEvenOrOddSum(vector<int>& numbers)
{
	int evenSum = 0, oddSum = 0;

	for (size_t i = 0; i < numbers.size(); i++)
	{
		if (i % 2 == 0)
		{
			evenSum += numbers[i];
		}
		else
		{
			oddSum += numbers[i];
		}

	}
	return evenSum * oddSum;
}


int main()
{
	size_t N;
	cin >> N;

	
	vector<int> nums;
	nums.resize(N);

	readVector(cin, nums, N);
	

	int average = calculateAverage(nums, N);
	
	findElementBellowAverage(nums, average);
	
	int sum = calculateEvenOrOddSum(nums);

	cout << sum << endl;

	return 0;

}

