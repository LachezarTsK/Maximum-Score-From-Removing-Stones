
#include <algorithm>
using namespace std;

class Solution {
public:

    int maximumScore(int a, int b, int c) {
        int maxValue = max(a, max(b, c));
        int totalSum = a + b + c;
        return maxValue >= totalSum - maxValue ? (totalSum - maxValue) : totalSum / 2;
    }
};
