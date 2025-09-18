#include <iostream>
#include <string>

using namespace std;

int main()
{
    double budget;
    string season;

    cin >> budget;
    cin >> season;

    double percentageOfBudget = 0.0;
    string typeOfVacation = "";
    string destination = "";

    if (budget <= 100)
    {
        destination = "Bulgaria";

        if (season == "summer")
        {
            typeOfVacation = "Camp";
            budget *= 0.30;
        }
        else if (season == "winter")
        {
            budget *= 0.70;
            typeOfVacation = "Hotel";
        }
    }
    else if (budget <= 1000)
    {
        destination = "Balkans";

        if (season == "summer")
        {
            budget  *= 0.40;
            typeOfVacation = "Camp";
        }
        else if(season == "winter")
        {
            typeOfVacation = "Hotel";
             budget *= 0.80;
        }

    }
    else if (budget > 1000)
    {
        destination = "Europe";
        typeOfVacation = "Hotel";
        budget *= 0.90;

    }

    cout.setf(ios::fixed);
    cout.precision(2);

    cout << "Somewhere in " << destination << endl;
    cout << typeOfVacation << " - " << budget << endl;

    return 0;
}