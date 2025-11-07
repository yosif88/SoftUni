#include <iostream>

using namespace std;

int main()
{
    int numOne, numTwo;
    cin >> numOne >> numTwo;

    if (numOne > numTwo)
    {
        int temp;
        temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    }

    // if (numOne > numTwo)
    // {
    //     swap(numOne, numTwo);

    // }

    cout << numOne << " " << numTwo << endl;

    return 0;
}