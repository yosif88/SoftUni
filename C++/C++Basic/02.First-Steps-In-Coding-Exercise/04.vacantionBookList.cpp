#include <iostream>

using namespace std;

int main() {
    int numberOfPages;
    cin >> numberOfPages;

    int pageReadPerHour;
    cin >> pageReadPerHour;

    int days;
    cin >> days;

    int totalTime = (numberOfPages / pageReadPerHour);
    int totalDays = totalTime / days;\

    cout << totalDays << endl;
    return 0;

}