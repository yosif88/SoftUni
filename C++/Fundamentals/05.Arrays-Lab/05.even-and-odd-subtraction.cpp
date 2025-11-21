#include<iostream>

using namespace std;

const int MAX_NUMBERS_SIZE = 99;

void readArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
    
}

void evenAndOddSubtraction(int arr[], int arrSize)
{
    int evenSum = 0;
    int oddSum = 0;

    for (int i = 0; i < arrSize; i++)
    {
        if(arr[i] % 2 == 0)
        {
            evenSum += arr[i];
        }
        else
        {
            oddSum += arr[i];
        }
    }
    
    cout << evenSum - oddSum << endl;
}


int main()
{

    int numbers[MAX_NUMBERS_SIZE];

    int n;
    cin >> n;

    readArray(numbers, n);

    evenAndOddSubtraction(numbers, n);

    return 0;
}