#include <iostream>
using namespace std;

int main(){
    int nylon, paint, thinner, hour;
    cin >> nylon;
    cin >> paint;
    cin >> thinner;
    cin >> hour;

    double sumNylon = (nylon + 2) * 1.50;
    double sumPaint = paint * 14.50 * 1.10;
    double sumThinner = thinner * 5.0;
    
    double totalSum = sumNylon + sumPaint + sumThinner + 0.40;
    double discount = totalSum * 0.30 * hour;

    double finalSum = totalSum + discount;
    
    cout << finalSum;

    return 0;
}