#include <iostream>
#include <string>

using namespace std;

int main()
{
    string username;
    string password;

    cin >> username;
    cin >> password;

    string data;
    cin >> data;

    while (password != data)
    {
        cin >> data;
    }
    
    cout << "Welcome " << username << "!" << endl;

    return 0;
}