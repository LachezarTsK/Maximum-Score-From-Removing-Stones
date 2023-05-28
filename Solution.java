
public class Solution {

    public int maximumScore(int a, int b, int c) {
        int maxValue = Math.max(a, Math.max(b, c));
        int totalSum = a + b + c;
        return maxValue >= totalSum - maxValue ? (totalSum - maxValue) : totalSum / 2;
    }
}
