#include <iostream>
#include<vector>
#include<sstream>
#include<string>
#include<algorithm>

using namespace std;

void readProducts(vector<string>& products, int n)
{
	string product;
	getline(cin, product);

	while (n--)
	{
		products.push_back(product);
		getline(cin, product);
	}

}

void printProducts(vector<string>& products)
{
	sort(products.begin(), products.end());

	for (int i = 0; i < products.size(); i++)
	{
		cout << i + 1 << "." << products[i] << endl;
	}
}
int main()
{
	
	vector<string> products;

	int product;
	cin >> product;
	cin.ignore();

	products.reserve(product);

	readProducts(products, product);
	printProducts(products);
	

	return 0;

}

