// ## Write function `countLessThan` whitch takes an array of numbers and a threshold number and return the count of elements in the array strictly less than the threshold number.

// "Strictly less than" means we want numbers less than (<) and not less than or equal to (<=).

// - Example:
//   - countLessThan([1, 2, 3, 4, 5], 2); --> 1
//   - countLessThan([1, 2, 3, 4, 5], 17); --> 5
//   - countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); --> 0
//   - countLessThan([10, 10, 10, -10, 15, 7], 10); --> 2


const countLessThan = (numbers, threshold) => {
    return numbers.filter(number => number < threshold).length;
};

// Example usage:
console.log(countLessThan([1, 2, 3, 4, 5], 2)); // Output: 1
console.log(countLessThan([1, 2, 3, 4, 5], 17)); // Output: 5
console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)); // Output: 0
console.log(countLessThan([10, 10, 10, -10, 15, 7], 10)); // Output: 2