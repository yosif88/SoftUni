#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main()
{
    string studentName;
    int age;
    float averageGrade;

    cin >> studentName >> age >> averageGrade;

    // cout.setf(ios::fixed);
    // cout.precision(2);

    cout << "Name: " << studentName << "," << " Age: "
    <<fixed << setprecision(2) << age <<
    "," << " Grade: " << averageGrade << endl;

    return 0;


}