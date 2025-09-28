#include <iostream>
#include <string>

using namespace std;

int main()
{
    string actorName;
    getline (cin, actorName);

    double academyPoint;
    cin >> academyPoint;
    
    int juryCount;
    cin >> juryCount;

    cin.ignore();

    cout.setf(ios::fixed);
    cout.precision(1);

    for (int i = 1; i <= juryCount; i++)
    {
        string juryName;
        getline(cin, juryName);

        double juryPoints;
        cin >> juryPoints;
        cin.ignore();

        academyPoint += juryName.length() * juryPoints / 2.0;

        if (academyPoint > 1250.5)
        {
            cout << "Congratulations, " << actorName << " got a nominee for leading role with " << academyPoint << "!" << endl;
            break;
        }

    }

    if (academyPoint <= 1250.5)
    {
        cout << "Sorry, " << actorName << " you need " << abs(1250.5 - academyPoint) << " more!" << endl;
    }
    

    return 0;
}