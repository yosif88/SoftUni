#include <iostream>
#include <string>

using namespace std;

int main()
{
    string name;
    cin >> name;

    int grade = 0;
    int fail = 0;

    double sumGrade = 0;

    while (grade < 12)
    {
        double yearGrade;
        cin >> yearGrade;

        if (yearGrade < 4.0)
        {
            if (fail == 1)
            {
                break;
            }
            fail++;
        }

        sumGrade += yearGrade;
        grade++;
    }

    if (grade == 12)
    {
        cout.setf(ios::fixed);
        cout.precision(2);

        double average = sumGrade / 12;
        cout << name << " graduated. Average grade: " << average << endl;
    }
    else 
    {
         cout << name << " has been excluded at " << grade << " grade" << endl;
    }
}