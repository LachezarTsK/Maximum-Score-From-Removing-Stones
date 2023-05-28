
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
    const maxValue = Math.max(a, Math.max(b, c));
    const totalSum = a + b + c;
    return maxValue >= totalSum - maxValue ? (totalSum - maxValue) : Math.floor(totalSum / 2);
};
