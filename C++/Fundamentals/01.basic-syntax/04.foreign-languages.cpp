#include <iostream>

using namespace std;

int main()
{
    string country;
    cin >> country;

    string language = (country == "England" || country == "USA" ? "English":
        (
            (country == "Spain" || country == "Argentina" || country == "Mexico") ? "Spanish" : "unknown"
        )
    );
    
    // if (country == "England" || country == "USA")
    // {
    //     cout << "English" << endl;
    // }
    // else if (country == "Spain" || country == "Argentina" || country == "Mexico")
    // {
    //     cout << "Spanish" << endl;
    // }
    // else 
    // {
    //     cout << "unknown" << endl;
    // }
    cout << language << endl;

    return 0;
}