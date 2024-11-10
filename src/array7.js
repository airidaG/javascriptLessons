// ## Write function `anyPositive` which is given an array of numbers and returns true if _any_ element is positive and false otherwise.

// - Example:
//   - anyPositive([1, 2, 3, 4, 5]); --> true
//   - anyPositive([1, 2, -3, 4, 5]); --> true
//   - anyPositive([0, 0, 1]); --> true
//   - anyPositive([-10, -10, -10]); --> false
//   - anyPositive([-10, -10, 1]); --> true

const anyPositive = (numbers) => {
    return numbers.some(number => number > 0);
};

// Example usage:
console.log(anyPositive([1, 2, 3, 4, 5])); // Output: true
console.log(anyPositive([1, 2, -3, 4, 5])); // Output: true
console.log(anyPositive([0, 0, 1])); // Output: true
console.log(anyPositive([-10, -10, -10])); // Output: false
console.log(anyPositive([-10, -10, 1])); // Output: true