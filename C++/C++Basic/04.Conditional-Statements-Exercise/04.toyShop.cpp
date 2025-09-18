#include <iostream>

using namespace std;

int main(){
    double priceExcursion;
    int countPuzzles, countDolls, countBears, countMinions, countTrucks;
    cin >> priceExcursion;
    cin >> countPuzzles >> countDolls >> countBears >> countMinions >> countTrucks;

    double sumOfToys = (countPuzzles * 2.60) 
    + (countDolls * 3) 
    + (countBears * 4.10)
    + (countMinions * 8.20)
    + (countTrucks * 2.0);

    int totalCountToys = countPuzzles + countDolls + countBears + countMinions + countTrucks;

    if (totalCountToys >= 50) {
        sumOfToys *= 0.75;
    }

    sumOfToys *= 0.90;
    
    double moneyLeft = sumOfToys - priceExcursion;
    
    cout.setf(ios::fixed);
    cout.precision(2);

    if (sumOfToys >= priceExcursion){
        cout << "Yes! " << moneyLeft << " lv left." << endl;
    }
    else{
        double neededMoney = priceExcursion - sumOfToys;

        cout << "Not enough money! " << neededMoney << " lv needed." << endl;
    }
   
    return 0;


}
