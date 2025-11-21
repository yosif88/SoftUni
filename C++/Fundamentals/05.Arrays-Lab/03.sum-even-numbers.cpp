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

int sumEvenNumbers(int arr[],int size)
{
    int sum = 0;

    for (int number = 0; number < size; number++)
    {
        if (arr[number] % 2 == 0)
        {
            sum += arr[number];
        }
    }
    return sum;
    
}
int main()
{
    int N;
    cin >> N;
    
    int numbers[MAX_NUMBERS_SIZE];

    readArray(numbers, N);

    cout << sumEvenNumbers(numbers, N) << endl;
    
    return 0;
}