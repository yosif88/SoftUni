#include <iostream>

using namespace std;

int main()
{
    int count;
    cin >> count;

    int p1 = 0;
    int p2 = 0;
    int p3 = 0;
    int p4 = 0;
    int p5 = 0;

    for (int i = 0; i < count; i++)
    {
        int value;
        cin >> value;

        if (value < 200)
        {
            p1++;
        }
        else if (200 <= value && value <= 399)
        {
            p2++;
        }
        else if (400 <= value && value <= 599)
        {
            p3++;
        }
        else if (600 <= value && value <= 799)
        {
            p4++;
        }
        else if (value >= 800)
        {
            p5++;
        }
    }

    double p1Percent = (p1 * 1.0 / count) * 100;
    double p2Percent = (p2 * 1.0 / count) * 100;
    double p3Percent = (p3 * 1.0 / count) * 100;
    double p4Percent = (p4 * 1.0 / count) * 100;
    double p5Percent = (p5 * 1.0 / count) * 100;

    cout.setf(ios::fixed);
    cout.precision(2);

    cout << p1Percent << "%" << endl;
    cout << p2Percent << "%" << endl;
    cout << p3Percent << "%" << endl;
    cout << p4Percent << "%" << endl;
    cout << p5Percent << "%" << endl;
    return 0;
}