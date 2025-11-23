#include <iostream>
#include <climits>

using namespace std;

const int MAX_NUMBERS = 99;

void readArray(int numbers[], int N)
{
    for (int i = 0; i < N; i++)
    {
        cin >> numbers[i];
    }
}

void findClosestNumbers(int numbers[], int N, int &minDiff)
{
    
    for (int i = 0; i < N - 1; i++)
    {
        for (int j = i + 1; j < N; j++)
        {
            int diff = abs(numbers[i] - numbers[j]);
            if (diff < minDiff)
            {
                minDiff = diff;
            }
        }
    }
}

int main()
{
    int N;
    cin >> N;
    int numbers[MAX_NUMBERS];

    readArray(numbers, N);
    
    if(N== 1)
    {
        cout << 0 << endl;
        
        return 0;
    }

    int minDiff = INT_MAX;
    
    findClosestNumbers(numbers, N, minDiff);

    cout << minDiff << endl;

    return 0;
}