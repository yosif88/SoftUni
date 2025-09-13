#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    double worldRecord, distance, time;
    cin >> worldRecord >> distance >> time;

    double totalTime = distance * time + floor(distance / 15) * 12.5;
    
    cout.setf(ios::fixed);
    cout.precision(2);

    if (totalTime < worldRecord)
    {
        cout << "Yes, he succeeded! The new world record is " << totalTime << " seconds." << endl;
    }
    else
    {
       cout << "No, he failed! He was " << abs(totalTime - worldRecord) << " seconds slower." << endl;
    }

    return 0;
}