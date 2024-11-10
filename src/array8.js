// ## Write a function `positives` which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

// - Examples:
//   - positives([1, -3, 5, -3, 0]) --> [1, 5]
//   - positives([1, 2, 3]) --> [1, 2, 3]
//   - positives([-1, -2, -3]) --> []


const positives = (numbers) => {
    return numbers.filter(number => number > 0);
};

// Example usage:
console.log(positives([1, -3, 5, -3, 0])); // Output: [1, 5]
console.log(positives([1, 2, 3])); // Output: [1, 2, 3]
console.log(positives([-1, -2, -3])); // Output: []