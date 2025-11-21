#include <iostream>

using namespace std;

const int MAX_NUMBERS_SIZE = 99;

void readArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
}

int compareAndSumArrays(int arr1[], int arr2[], int size, int &sum)
{
    for (int i = 0; i < size; i++)
    {
        if (arr1[i] != arr2[i])
        {
            return i;
        }
        else
        {
            sum += arr1[i];
        }
    }
    return -1;
}

void printArray(int arr1[], int arr2[], int size, int & sum)
{
    int difference = compareAndSumArrays(arr1, arr2, size, sum);
    if (difference == -1)
    {
        cout << "Arrays are identical. Sum: " << sum << endl;
    }
    else
    {
        cout << "Arrays are not identical. Found difference at " << difference << " index." << endl;
    }
}

int main()
{
    int n;
    cin >> n;

    int arr1[MAX_NUMBERS_SIZE];
    int arr2[MAX_NUMBERS_SIZE];

    int sum;
    
    readArray(arr1, n);
    readArray(arr2, n);

    printArray(arr1, arr2, n, sum);

    return 0;
}