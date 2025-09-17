#include <iostream>
#include <string>

using namespace std;

int main()
{
    string town;
    double sales;

    cin >> town;
    cin >> sales;

    cout.setf(ios::fixed);
    cout.precision(2);

    if (town == "Sofia")
    {
        if (0 < sales && sales <= 500)
        {
            cout << sales * 0.05 << endl;
        }
        else if (500 < sales && sales <= 1000)
        {
            cout << sales * 0.07 << endl;
        }
        else if (1000 < sales && sales <= 10000)
        {
            cout << sales * 0.08 << endl;
        }
        else if (sales > 10000)
        {
            cout << sales * 0.12 << endl;
        }
        else 
        {
            cout << "error" << endl;
        }
    }
    else if (town == "Varna")
    {
          if (0 < sales && sales <= 500)
        {
            cout << sales * 0.045 << endl;
        }
        else if (500 < sales && sales <= 1000)
        {
            cout << sales * 0.075 << endl;
        }
        else if (1000 < sales && sales <= 10000)
        {
            cout << sales * 0.1 << endl;
        }
        else if (sales > 10000)
        {
            cout << sales * 0.13 << endl;
        }
        else 
        {
            cout << "error" << endl;
        }
    }
    else if (town == "Plovdiv")
    {
          if (0 < sales && sales <= 500)
        {
            cout << sales * 0.055 << endl;
        }
        else if (500 < sales && sales <= 1000)
        {
            cout << sales * 0.08 << endl;
        }
        else if (1000 < sales && sales <= 10000)
        {
            cout << sales * 0.12 << endl;
        }
        else if (sales > 10000)
        {
            cout << sales * 0.145 << endl;
        }
        else 
        {
            cout << "error" << endl;
        }
    }
    else
    {
        cout << "error" << endl;
    }

    return 0;
}