#include <iostream>

using namespace std;

int main(){
    int startPoint;
    cin >> startPoint;

    double bonus = 0;
    
    if (startPoint <= 100){
        bonus = 5;
    }

    else if (startPoint > 1000){
        bonus = startPoint * 0.10;
    }

    else if (startPoint > 100){
        bonus = startPoint * 0.20;
    }

    if (startPoint % 2 == 0){
        bonus += 1;
    }
    else if (startPoint % 10 == 5){
        bonus += 2;
    }

    double totalBonus = bonus + startPoint;

    cout << bonus << endl;
    cout << totalBonus << endl;

    return 0;
}