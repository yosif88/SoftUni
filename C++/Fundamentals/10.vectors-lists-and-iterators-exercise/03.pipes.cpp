#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

void readVector(istream &in, vector<long> &v, size_t N)
{
    v.resize(N);

    for (int idx = 0; idx < N; idx++)
    {
        cin >> v[idx];
    }
}

void calculateLifeTime(
    vector<long> &lifetimes,
    const vector<long> &installation,
    const vector<long> &checkup)
{
    lifetimes.resize(installation.size());

    for (size_t i = 0; i < installation.size(); i++)
    {
        long decay = installation[i] - checkup[i];
        lifetimes[i] = installation[i] / decay;
    }
}
int main()
{
    size_t N;
    cin >> N;

    vector<long> installation, checkup;
    installation.reserve(N);
    checkup.reserve(N);

    readVector(cin, checkup, N);
    readVector(cin, installation, N);

    vector<long> lifetimes;
    calculateLifeTime(lifetimes, installation, checkup);

    for(long lifeTime: lifetimes)
    {
        cout << lifeTime << ' ';
    }
    cout << endl;

    return 0;
}