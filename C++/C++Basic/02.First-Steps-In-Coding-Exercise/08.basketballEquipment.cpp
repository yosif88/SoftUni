#include <iostream>

using namespace std;

int main(){
    int price;
    cin >> price;

    double sneakersPrice = price * 0.60;
    double outfitPrice = sneakersPrice * 0.80;
    double basketballPrice = outfitPrice / 4;
    double accessoriesPrice = basketballPrice / 5;

    double totalPrice = price + sneakersPrice + outfitPrice + basketballPrice + accessoriesPrice;
    
    cout << totalPrice;

    return 0;

}