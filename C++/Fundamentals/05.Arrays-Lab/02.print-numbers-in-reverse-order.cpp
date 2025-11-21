#include <iostream>

using namespace std;

const int MAX_NUMBER_SIZE = 99;

void readArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
}

void reversedNumber(int arr[], int n)
{
    for(int num = n - 1 ; num >= 0; num--)
    {
        cout << arr[num] << " ";
    }
}

int main()
{
    int N;
    cin >> N;
    int numbers[MAX_NUMBER_SIZE];

    readArray(numbers, N);
    reversedNumber(numbers, N);
    
    return 0;
}
