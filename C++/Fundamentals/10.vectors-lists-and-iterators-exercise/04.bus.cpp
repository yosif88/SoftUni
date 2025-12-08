#include <iostream>
#include <sstream>
#include <vector>
#include<climits>

using namespace std;

unsigned readMilitaryTime(istream & is)
{
    string token;
    is >> token;

    unsigned hours = (token[0] - '0') * 10 + (token[1] - '0');
    unsigned mins = (token[2] - '0') * 10 + (token[3] - '0');

    return hours * 60 + mins;
}
void readSchedule(istream & is, vector<unsigned> & v, size_t N)
{
    v.resize(N);

    for (size_t i = 0; i < N; i++)
    {
        v[i] = readMilitaryTime(is);
    }
    
}

unsigned timeDiff(unsigned departureTime, unsigned arrivalTime)
{
    if(arrivalTime > departureTime)
    {
        return 24*60 -(arrivalTime - departureTime);
    }
    return departureTime - arrivalTime;
}

int main()
{
    size_t N;
    cin >> N;

    vector<unsigned> busScheduleMin;

    readSchedule(cin, busScheduleMin, N);

    unsigned trainDep = readMilitaryTime(cin);
    unsigned diff = UINT_MAX;
    unsigned diffIdx = UINT_MAX;

    for(size_t i = 0; i < N; i++)
    {
        unsigned currTimeDiff = timeDiff(trainDep, busScheduleMin[i]);
        if (currTimeDiff < diff)
        {
            diff = currTimeDiff;
            diffIdx = i;
        }
    }
    cout << diffIdx + 1 << endl;
    return 0;
}