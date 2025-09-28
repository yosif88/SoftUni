#include <iostream>
#include <string>

using namespace std;

int main()
{

    int numberOfTournaments, startingPoints;
    cin >> numberOfTournaments;
    cin >> startingPoints;

    int points = 0;
    int countWin = 0;

    for (int i = 1; i <= numberOfTournaments; i++)
    {
        string stageOfTournament;
        cin >> stageOfTournament;

        if (stageOfTournament == "W")
        {
            points += 2000;
            countWin ++;
        }
        else if (stageOfTournament == "F")
        {
           points += 1200;
        }
        else if (stageOfTournament == "SF")
        {
            points += 720;
        }

        
    }
    
    int finalPoints = startingPoints + points;
    int averagePoint = points / numberOfTournaments;
    double percentWinTournaments = countWin * 1.0 / numberOfTournaments * 100;

    cout.setf(ios::fixed);
    cout.precision(2);

    cout << "Final points: " << finalPoints << endl;
    cout << "Average points: " << averagePoint << endl;
    cout << percentWinTournaments << "%" << endl;


    return 0;
}