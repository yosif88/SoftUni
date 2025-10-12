#include <iostream>
#include <string>

using namespace std;

int main()
{
    string movieName;

    int countTickets = 0;
    int countStudent = 0;
    int countStandard = 0;
    int countKid = 0;

    while (getline(cin, movieName) && movieName != "Finish")
    {
        int freeSeats;
        cin >> freeSeats;

        string ticketType;
        cin >> ticketType;
        
        int takenSeat = 0;

        while (ticketType != "End")
        {

            if (ticketType == "student")
            {
                countStudent++;
            }
            else if (ticketType == "standard")
            {
                countStandard++;
            }
            else if (ticketType == "kid")
            {
                countKid++;
            }
            
            countTickets++; 
            takenSeat ++;
            
            if (freeSeats == takenSeat)
            {
                break;
            }

            cin >> ticketType;
            
        }

        cin.ignore();
        double percentFull = (takenSeat * 1.0 / freeSeats) * 100;

        cout.setf(ios::fixed);
        cout.precision(2);

        cout << movieName << " - " << percentFull << "% full." << endl;
    }
    double studentPercent = (countStudent * 1.0 / countTickets) * 100;
    double standardPercent = (countStandard * 1.0 / countTickets) * 100;
    double kidPercent = (countKid * 1.0 / countTickets) * 100;

    cout << "Total tickets: " << countTickets << endl;
    cout << studentPercent << "% student tickets." << endl;
    cout << standardPercent << "% standard tickets." << endl;
    cout << kidPercent << "% kids tickets." << endl;

}