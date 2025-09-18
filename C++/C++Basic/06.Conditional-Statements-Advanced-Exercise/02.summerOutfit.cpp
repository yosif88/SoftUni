#include <iostream>

using namespace std;

int main()
{
    int degrees;
    string timeOfDay;

    cin >> degrees;
    cin >> timeOfDay;

    string outFit = "";
    string shoes = "";

    if (timeOfDay == "Morning")
    {
        if (10 <= degrees && degrees <= 18)
        {
            outFit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (degrees <= 24)
        {
            outFit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees >= 25)
        {
            outFit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    else if (timeOfDay == "Afternoon")
    {
        if (10 <= degrees && degrees <= 18)
        {
            outFit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees <= 24)
        {
            outFit = "T-Shirt";
            shoes = "Sandals";
        }
        else if (degrees >= 25)
        {
            outFit = "Swim Suit";
            shoes = "Barefoot";
        }
    }
    else if (timeOfDay == "Evening")
    {
         if (10 <= degrees && degrees <= 18)
        {
            outFit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees <= 24)
        {
            outFit = "Shirt";
            shoes = "Moccasins";
        }
        else if (degrees >= 25)
        {
            outFit = "Shirt";
            shoes = "Moccasins";
        }
    }

    cout << "It's " <<degrees << " degrees, get your " << outFit << " and " << shoes << "." << endl;

    return 0;
}