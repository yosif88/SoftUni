#include <iostream>
#include <list>
#include <sstream>

using namespace std;

void readTrain(istream &is, list<int> &train)
{
    int cart;

    while (is >> cart)
    {
        train.push_front(cart);
    }
}

void readTrain(list<int> &train)
{
    string line;
    getline(cin, line);

    istringstream istr(line);
    readTrain(istr, train);
}

void mergeFromTrain(list<int> &result,
                    string &resultMerges,
                    list<int>::iterator &itMerge,
                    char trainName)
{
    result.push_back(*itMerge);
    itMerge++;
    resultMerges.push_back(trainName);
}

list<int> mergeTrains(list<int> &trainA, list<int> &trainB, string &resultMerges)
{
    list<int> result;
    resultMerges.erase();

    list<int>::iterator itA = trainA.begin(), itB = trainB.begin();

    while (itA != trainA.end() || itB != trainB.end())
    {
        if (itA == trainA.end())
        {
            mergeFromTrain(result, resultMerges, itB, 'B');
        }
        else if (itB == trainB.end())
        {
            mergeFromTrain(result, resultMerges, itA, 'A');
        }
        else
        {
            if (*itA < *itB)
            {
                mergeFromTrain(result, resultMerges, itA, 'A');
            }
            else
            {
                mergeFromTrain(result, resultMerges, itB, 'B');
            }
        }
    }

    return result;
}

int main()
{
    list<int> trainA, trainB;

    readTrain(trainA);
    readTrain(trainB);

    string merges;
    list<int> finalTrain = mergeTrains(trainA, trainB, merges);

    cout << merges << endl;

    list<int>::reverse_iterator itMerge = finalTrain.rbegin();
    
    while(itMerge != finalTrain.rend())
    {
        cout << *itMerge << ' ';
        itMerge++;
    }

    return 0;
}