#include <iostream>
#include <string>

using namespace std;

int main() {
	string name;
	cin >> name;

	int numberOfProjects;
	cin >> numberOfProjects;

	int hours = numberOfProjects * 3;

	cout << "The architect " << name << " will need " << hours << " hours to complete " << numberOfProjects << " project/s.";

	return 0;
}