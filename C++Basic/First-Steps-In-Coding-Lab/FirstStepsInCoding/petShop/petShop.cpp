#include <iostream>

using namespace std;

int main() {
	int dogFood;
	cin >> dogFood;

	int catFood;
	cin >> catFood;

	double sum = (dogFood * 2.50) + (catFood * 4);
	
	cout << sum << " lv.";

	return 0;
}
