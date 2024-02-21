/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
      const n = numbers.length + 1; // Since one number is missing
    for (let i = 1; i <= n; i++) {
        if (!numbers.includes(i)) {
            return i;
        }
    }
  
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
      const n = numbers.length + 1;
    const expectedSum = n * (n + 1) / 2;
    const actualSum = numbers.reduce((acc, cur) => acc + cur, 0);
    return expectedSum - actualSum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
