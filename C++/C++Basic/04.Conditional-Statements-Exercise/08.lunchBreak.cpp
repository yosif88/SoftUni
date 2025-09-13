#include <iostream>
#include <string>
#include <cmath>


using namespace std;

int main()
{
    string seriesName;
    int episodeDuration, breakDuration;

    getline(cin, seriesName);
    cin >> episodeDuration >> breakDuration;

    double lunchTime = breakDuration * 0.125;
    double restTime = breakDuration * 0.25;

    double totalTime = episodeDuration + lunchTime +restTime;

    if(totalTime <= breakDuration){
        cout << "You have enough time to watch " << seriesName << " and left with " << ceil(breakDuration - totalTime) << " minutes free time." << endl;
    } 
    else{
       cout << "You don't have enough time to watch " <<seriesName << ", you need "<< ceil(totalTime - breakDuration) << " more minutes." << endl;
    }

    return 0;

}