#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double radian;
    cin >> radian;

    double degrees = radian * 180 / 3.14;
    cout << round(degrees) << endl;

    return 0;

}