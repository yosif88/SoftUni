#include <iostream>

using namespace std;

int main(){
    int length, width, height;
    double percent;

    cin >> length;
    cin >> width;
    cin >> height;
    cin >> percent;

    int volume = length * width * height;
    double volumeInLiters = volume * 0.001;
    double liters = volumeInLiters * (1 - percent / 100.0);

    cout << liters << endl;

    return 0;

}