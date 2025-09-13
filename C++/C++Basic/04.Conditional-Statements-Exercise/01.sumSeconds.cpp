#include <iostream>

using namespace std;

int main(){
    int timeFirst, timeSecond, timeThird;
    cin >> timeFirst >> timeSecond >> timeThird;

    int sumOfTime = timeFirst + timeSecond + timeThird;

    int minutes = sumOfTime / 60;
    int second = sumOfTime % 60;

    if (second < 10){
        cout << minutes << ":0" << second << endl;
    }
    else {
        cout << minutes << ":" << second << endl;
    }

    return 0;
}