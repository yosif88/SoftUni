#include <iostream>

using namespace std;

int MAX_SIZE = 99;

void readArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
}

int averageAbove(int arr[], int n, int &averageSum)
{
    for (int i = 0; i < n; i++)
    {
        averageSum += arr[i];
    }
    return averageSum /= n;
}

void printArray(int arr[], int n, int average)
{
    for (int i = 0; i < n; i++)
    {
        if (arr[i] >= average)
        {
            cout << arr[i] << " ";
        }
    }
    cout << endl;
}

int main()
{
    int n;
    cin >> n;

    int arr[MAX_SIZE];

    readArray(arr, n);

    int averageSum = 0;

    int average = averageAbove(arr, n, averageSum);

    printArray(arr, n, average);

    return 0;
}