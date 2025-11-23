#include <iostream>
#include <climits>

using namespace std;

const int MAX_SIZE = 99;

void readArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
}

int main()
{
    int n;
    cin >> n;

    int arr[MAX_SIZE];
    readArray(arr, n);

    int counters[10] = {0};

    for (int i = 0; i < n; i++)
    {
        counters[arr[i]]++;
    }

    int mostFrequent = INT_MIN;

    for (int i = 0; i < 10; i++)
    {
        if (counters[i] > mostFrequent)
        {
            mostFrequent = counters[i];
            
        }
    }

    for (int curr = 0; curr < 10; curr++)
    {
        if (counters[curr] == mostFrequent)
        {
            cout << curr << ' ';
        }
    }

    cout << endl;

    return 0;
}