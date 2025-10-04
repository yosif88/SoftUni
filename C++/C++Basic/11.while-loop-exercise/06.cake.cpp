#include <iostream>
#include <string>

using namespace std;

int main()
{
    int width, length;
    cin >> width >> length;

    int cake = width * length;

    string command;
    cin >> command;

    while (command != "STOP")
    {
        int pieces = stoi(command);
        
        cake -= pieces;
        
        if (cake <= 0)
        {
            cout << "No more cake left! You need " << abs(cake) << " pieces more." << endl;
            break;
        }
        cin >> command;
    }

    if (cake > 0)
    {
        cout << cake << " pieces are left." << endl;
    }
}