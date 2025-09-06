#include <iostream>

using namespace std;

int main() {
	
	double yard;
	cin >> yard;

	double cost = yard * 7.61;
	
	double discount = cost * 0.18;

	double finalCost = cost - discount;
	
	cout << "The final price is: " << finalCost << " lv." << endl;
	cout << "The discount is: " << discount << " lv.";
	
	return 0;


}