#include <iostream>
using  namespace std;

int main() {
    double depositAmount;
    cin >> depositAmount;

    int months;
    cin >> months;

    double percent;
    cin >> percent;
    percent /= 100;

    double calculate = depositAmount + months * ((depositAmount * percent) / 12);

    cout << calculate << endl;

    return 0;



}