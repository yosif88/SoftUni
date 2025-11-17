#include <iostream>
#include <iomanip>

using namespace std;

double getPrice(string product)
{
    double price = 0;

    if (product == "coffee")
    {
        price = 1.50;
    }
    else if(product == "water")
    {
        price = 1.0;
    }
    else if (product == "coke")
    {
        price = 1.40;
    }
    else if (product == "snacks")
    {
        price = 2.0;
    }
    return price;
}

double orderPrice(string product, int quantity)
{
    double price = getPrice(product);
    return price * quantity;
}
int main()
{
    string product;
    cin >> product;

    int quantity;
    cin >> quantity;

    cout << fixed << setprecision(2) << orderPrice(product, quantity) << endl;

    return 0;
}