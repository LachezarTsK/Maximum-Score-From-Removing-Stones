
using System;

public class Solution
{
    public int MaximumScore(int a, int b, int c)
    {
        int maxValue = Math.Max(a, Math.Max(b, c));
        int totalSum = a + b + c;
        return maxValue >= totalSum - maxValue ? (totalSum - maxValue) : totalSum / 2;
    }
}
