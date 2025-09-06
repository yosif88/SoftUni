#include <iostream>
using namespace std;

int main() {

    int numberOfPens, numberOfMarkers, whiteboardCleaner, percent;
    
    cin >> numberOfPens;
    cin >> numberOfMarkers;
    cin >> whiteboardCleaner;
    cin >> percent;


    double sumPens = numberOfPens * 5.80;
    double sumMarkers = numberOfMarkers * 7.20;
    double sumWhiteboard = whiteboardCleaner * 1.20;

    double totalSum = sumPens + sumMarkers + sumWhiteboard;
    totalSum -= totalSum * (percent / 100.0);
   
    cout << totalSum << endl;
   
    return 0;


}