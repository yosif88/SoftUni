#include <iostream>

using namespace std;

string printGrade(float grade);

int main()
{
    float grade;
    cin >> grade;

    cout << printGrade(grade);
    
    return 0;
}

string printGrade(float grade)
{
    if (grade >= 5.50)
    {
        return "Excellent";
    }
    if (grade >= 4.50)
    {
        return "Very good";
    }
    if (grade >= 3.50)
    {
        return "Good";
    }
    if (grade >= 3.0)
    {
        return "Poor";
    }

    return "Fail";
}