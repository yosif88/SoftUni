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

void magicSumPairs(int arr[], int N, int magicSum)
{
     for (int i = 0; i < N - 1; i++)
    {
        for (int j = i + 1; j < N; j++)
        {
           if(arr[i] + arr[j] == magicSum)
           {
               cout << arr[i] << " " << arr[j] << endl;
           }
        }
    }
}
int main()
{
    int N;
    cin >> N;
    int arr[MAX_SIZE];
    readArray(arr, N);

    int magicSum;
    cin >> magicSum;

    
    magicSumPairs(arr, N, magicSum);
    
  
    
    return 0;
}