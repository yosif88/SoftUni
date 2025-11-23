#include <iostream>


using namespace std;

int MAX_SIZE = 99;


void pirntArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void swap(int arr1[], int arr2[],int size)
{
   
    for (int count = 0; count < size; count++)
    {
        int i1, i2;
        cin >> i1 >> i2;

        if (count % 2 == 0)
        {
            arr1[count]= i1;
            arr2[count]= i2;
        }
        else
        {
            arr1[count]= i2;
            arr2[count]= i1;
        }
    }
}
int main()
{

    int N;
    cin >> N;

    int arr1[MAX_SIZE];
    int arr2[MAX_SIZE];
    
    swap(arr1, arr2, N);
    
    pirntArray(arr1, N);
    pirntArray(arr2, N);

    return 0;
}