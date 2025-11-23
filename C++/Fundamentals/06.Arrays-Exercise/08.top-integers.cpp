#include <iostream>

using namespace std;

const int MAX_SIZE = 99;

void readArray(int arr[], int N)
{
    for (int i = 0; i < N; i++)
    {
        cin >> arr[i];
    }
}

bool isTopInteger(int arr[], int N, int idx)
{
    if(idx == N - 1)
    {
        return true;
    }

    for (int i = idx + 1; i < N; i++)
    {
        if(arr[idx] <= arr[i])
        {
            return false;
        }
    }
    return true;
}

void printArray(int arr[], int N)
{
    for (int i = 0; i < N; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}
int main()
{
    int N;
    cin >> N;
    int arr[MAX_SIZE];
    int topIntegers[N];
    int topCount = 0;

    readArray(arr, N);

    for (int i = 0; i < N; i++)
    {
        if(isTopInteger(arr, N, i))
        {
            topIntegers[topCount] = arr[i];
            topCount++;
        }
        
    }

    printArray(topIntegers, topCount);
    return 0;
}