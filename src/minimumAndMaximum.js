/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
      if (numbers.length === 0) return [];
    numbers.sort((a, b) => a - b); // Ensure numerical order
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
      if (numbers.length === 0) return [];
    let min = numbers[0];
    let max = numbers[0];
    for (let number of numbers) {
        if (number < min) min = number;
        if (number > max) max = number;
    }
    return [min, max];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
