#include <iostream>

using namespace std;

int main(){
    double chickenMenu = 10.35;
    double fishMenu = 12.40;
    double veganMenu = 8.15;

    int numberOfChickenMenus, numberOfFishMenus, numberOfVeganMenu;
    cin >> numberOfChickenMenus;
    cin >> numberOfFishMenus;
    cin >> numberOfVeganMenu;

    double chickenPrice = numberOfChickenMenus * chickenMenu;
    double fishPrice = numberOfFishMenus * fishMenu;
    double veganPrice = numberOfVeganMenu * veganMenu;
    
    double totalSum = chickenPrice + fishPrice + veganPrice;
    double desertPrice = totalSum * 0.20;
    double finalSum = totalSum + desertPrice + 2.50;


    cout << finalSum << endl;
    return 0;

}