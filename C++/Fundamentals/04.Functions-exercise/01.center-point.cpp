#include <iostream>
#include <cmath>

using namespace std;

void readCoordinate(double &x, double &y)
{
    cin >> x >> y;
}

double distanceToCenter(double x, double y)
{
    double distance;
    distance = sqrt(x * x + y * y);

    return distance;
}

void printCoordinates(double x, double y)
{
    cout << "(" << x << ", " << y << ")";
}

int main()
{
    double x1, y1;
    readCoordinate(x1, y1);

    double x2, y2;
    readCoordinate(x2, y2);

    double xDist = distanceToCenter(x1, y1);
    double yDist = distanceToCenter(x2, y2);

    if (xDist <= yDist)
    {
        printCoordinates(x1, y1);
    }
    else
    {
        printCoordinates(x2, y2);
    }

    return 0;
}