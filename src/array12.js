// ## Write a function `integers` which takes an array of numbers and returns a new array containing only the integers in the given array.

// - Example:
//   - integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]


const integers = (numbers) => {
    return numbers.filter(number => Number.isInteger(number));
};

// Example usage:
console.log(integers([3.14, 2.4, 7, 8.1, 2])); // Output: [7, 2]