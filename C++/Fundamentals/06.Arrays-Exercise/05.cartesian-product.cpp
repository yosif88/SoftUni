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
void calculateCartesianProduct(int arr[], int N, int productArr[], int &index)
{
    for (int i = 0; i < N; i++)
    {
        int el = arr[i];
        for (int j = 0; j < N; j++)
        {
            int el1 = arr[j];
            productArr[index] = el * el1;
            index++;
        }
    }
}

void printArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}

int main()
{
    int N;
    cin >> N;

    int arr[MAX_SIZE];
    int productArr[N*N];

    readArray(arr, N);

    int index = 0;

    calculateCartesianProduct(arr, N, productArr, index);

    printArray(productArr, index);

    cout << endl;

    return 0;
}