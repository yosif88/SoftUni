#include <iostream>
#include <string>

using namespace std;

int main()
{
    int width, length, height;
    cin >> width >> length >> height;

    int roomVolume = width * length * height;

    string command;
    cin >> command;

    int freeSpace = 0;

    while (command != "Done")
    {
        int boxes = stoi(command);
        freeSpace += boxes;
        
        if (roomVolume < freeSpace)
        {
            cout << "No more free space! You need " << freeSpace - roomVolume << " Cubic meters more." << endl;
            break;
        }
        cin >> command;
    }
   
    if (roomVolume >= freeSpace)
    {
        cout << roomVolume-freeSpace << " Cubic meters left." << endl;
    }

    return 0;
}