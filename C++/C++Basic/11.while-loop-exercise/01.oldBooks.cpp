#include <iostream>
#include <string>

using namespace std;

int main()
{
    string searchBook;
    getline(cin, searchBook);

    int count = 0;
    bool isFound = false;

    string currentBook;
    getline(cin, currentBook);
    
    while (currentBook != "No More Books")
    {
        

        if (searchBook == currentBook)
        {
            isFound = true;
            cout << "You checked " << count << " books and found it." << endl;
            break;
        }
        count++;

        getline(cin, currentBook);
    }

    if (!isFound)
    {
        cout << "The book you search is not here!" << endl;
        cout << "You checked " << count << " books.";
    }

    return 0;
}