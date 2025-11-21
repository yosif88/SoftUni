#include <iostream>

using namespace std;

void readArray(string arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
}

void reverseArrayString(string arr[], int size)
{
    int halfLength = size / 2;

    for (int i = 0; i < halfLength; i++)
    {
        int lastIndex = (size - 1) - i;

        string lastLetter = arr[lastIndex];
        string firstLetter = arr[i];

        arr[lastIndex] = firstLetter;
        arr[i] = lastLetter;
    }
}

void printArray(string arr[], int arrSize)
{
    for (int i = 0; i < arrSize; i++)
    {
        cout << arr[i] << " ";
    }
    
}
int main()
{
    int N;
    cin >> N;

    const int MAX_NUMBERS_SIZE = 99;

    string words[MAX_NUMBERS_SIZE];

    readArray(words, N);

    reverseArrayString(words, N);
    printArray(words, N);

    return 0;
}