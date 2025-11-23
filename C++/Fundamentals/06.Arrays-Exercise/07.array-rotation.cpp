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

void rotationArray(int arr[], int N)
{
    int firstElement = arr[0];

    for (int i = 0; i < N - 1; i++)
    {
        arr[i] = arr[i + 1];
    }

    arr[N - 1] = firstElement;
}

void printArray(int arr[], int N)
{
    for (int i = 0; i < N; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

main()
{
    int N, rotations;

    cin >> N;

    int arr[MAX_SIZE];

    readArray(arr, N);

    cin >> rotations;

    for (int count = 0; count < rotations; count++)
    {
       rotationArray(arr, N);
    }

    printArray(arr, N);
    cout << endl;
    
    return 0;
}