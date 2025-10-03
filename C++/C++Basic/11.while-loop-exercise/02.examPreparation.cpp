#include <iostream>
#include <string>
#include <iomanip>

using namespace std;

int main()
{
    int failingGrade;
    cin >> failingGrade;
    cin.ignore();

    string command;
    getline(cin, command);

    int countFailingGrade = 0;
    int countGrade = 0;
    int numberOfProblem = 0;
    double sumOfGrade = 0;
    string lastProblem = "";
    string taskName = "";

    while (command != "Enough")
    {
        taskName = command;
    
        int grade;
        cin >> grade;

        cin.ignore();

        sumOfGrade += grade;
        countGrade++;

        if (grade <= 4)
        {
            countFailingGrade++;
        }

        if (countFailingGrade >= failingGrade)
        {
            cout << "You need a break, " << countFailingGrade << " poor grades." << endl;
            break;
        }
        
        numberOfProblem ++;
        lastProblem = taskName;

        getline(cin, command);
    }

    double averageGrade = sumOfGrade / countGrade;

    cout.setf(ios::fixed);
    cout.precision(2);

    if (countFailingGrade < failingGrade)
    {
        cout << "Average score: " << averageGrade << endl;
        cout << "Number of problems: " << numberOfProblem << endl;
        cout << "Last problem: " << lastProblem << endl;
    }
   
}