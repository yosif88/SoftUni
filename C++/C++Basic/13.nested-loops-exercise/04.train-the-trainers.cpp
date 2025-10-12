#include <iostream>
#include <string>

using namespace std;

int main()
{
    int n;
    cin >> n;
    cin.ignore();

    double totalGrade = 0;
    double totalCountGrade = 0;

    cout.setf(ios::fixed);
    cout.precision(2);

    string cmd;
 
    while (getline(cin, cmd) && cmd != "Finish")
    {
       
        double gradeSum = 0;
        int countGrade = 0;

        for (int i = 0; i < n; i++)
        {
            double grade;
            cin >> grade;
            

            gradeSum += grade;
            countGrade++;
            totalCountGrade++;
        }

        totalGrade += gradeSum;

        double avrgGrade = gradeSum / countGrade;

        cout << cmd << " - " << avrgGrade << "." << endl;
        
        cin.ignore();
    }

    double averageGrade = totalGrade / totalCountGrade;

    cout << "Student's final assessment is " << averageGrade << "." << endl;

    return 0;
}