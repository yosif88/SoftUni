#include <iostream>


using namespace std;

int MAX_SIZE = 99;

void readArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }

}

void maxSequence(int arr[], int size, int &max_seq_length, int &max_seq_el, int &seq_length, int &seq_el)
{
    for (int i = 1; i < size; i++)
    {
        if(arr[i] == seq_el)
        {
            seq_length++;
        }
        else
        {
            if(seq_length >= max_seq_length)
            {
                max_seq_length = seq_length;
                max_seq_el = seq_el;
            }
            seq_el = arr[i];
            seq_length = 1;
        }
    }
     if(seq_length >= max_seq_length)
            {
                max_seq_length = seq_length;
                max_seq_el = seq_el;
            }
    
}

void printArray( int max_seq_length,  int max_seq_el)
{
      for (int i = 0; i < max_seq_length; i++)
    {
        cout << max_seq_el << " ";
    }
}

int main()
{
    int N;
    cin >> N;
    
    int arr[MAX_SIZE];

    readArray(arr, N);

    int max_seq_length = 1;
    int max_seq_el = arr[0];

    int seq_length = 1;
    int seq_el = arr[0];

   maxSequence(arr, N, max_seq_length, max_seq_el, seq_length, seq_el);
   printArray(max_seq_length, max_seq_el);
   cout << endl;
    
    return 0;
}