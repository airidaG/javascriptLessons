// ## Given an array and a value, write function `countValue` which returns the number of times that value is found in the array.

// - Example:
//   - countValue([1, 2, 3, 4, 5], 2); --> 1
//   - countValue([1, 2, 3, 4, 5], 17); --> 0
//   - countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1); --> 4
//   - countValue([10, 10, 10, -10], 10); --> 3
//   - countValue(['hello', bananas', 'hello'], 'hello'); --> 2
//   - countValue(['hello', bananas', 'hello'], 'giraffe'); --> 0

const countValue = (arr, value) => {
    return arr.filter(item => item === value).length;
};

// Example usage:
console.log(countValue([1, 2, 3, 4, 5], 2)); // Output: 1
console.log(countValue([1, 2, 3, 4, 5], 17)); // Output: 0
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)); // Output: 4
console.log(countValue([10, 10, 10, -10], 10)); // Output: 3
console.log(countValue(['hello', 'bananas', 'hello'], 'hello')); // Output: 2
console.log(countValue(['hello', 'bananas', 'hello'], 'giraffe')); // Output: 0
