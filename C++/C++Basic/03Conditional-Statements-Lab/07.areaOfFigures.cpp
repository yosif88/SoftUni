#include <iostream>
#include <string>

using namespace std;

int main(){
    string figure;
    cin >> figure;

    double area = 0;

    if (figure == "square"){
        double side;
        cin >> side;
        area = side * side;
    }
    else if (figure == "rectangle"){
        double sideA, sideB;
        cin >> sideA;
        cin >> sideB;

        area = sideA * sideB;

    }
    else if (figure == "circle"){
        double radius;
        cin >> radius;

        area = 3.14159 * radius * radius;
    }
    else if (figure == "triangle")
    {
        double length, h;
        cin >> length;
        cin >> h;

        area = h/2 * length;
    }
    

    cout.setf(ios::fixed);
    cout.precision(3);
    
    cout << area << endl;
    
    return 0;
}