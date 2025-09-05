#include <iostream>
#include <string>
using namespace std;

int main() {
	string name, lastName, town;
	cin >> name;
	cin >> lastName;
	
	int age;
	cin >> age;

	cin >> town;

	cout << "You are " << name << " " << lastName << ", a " << age << "-years old person from " << town << ".";
}