// ## Write a function `squareDance` which takes an array of numbers and returns a new array containing the result of squaring each of the numbers in the given array.

// - Example:
//   - squareDance([1, 2, 3]) --> [1, 4, 9]

const squareDance = (numbers) => {
    return numbers.map(number => number * number);
};

// Example usage:
console.log(squareDance([1, 2, 3])); // Output: [1, 4, 9]