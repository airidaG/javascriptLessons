// ## Write a function `odds` which takes an array of numbers and returns a new array containing only the odd numbers in the given array.


const odds = (numbers) => {
    return numbers.filter(number => number % 2 !== 0);
};

// Example usage:
console.log(odds([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]
console.log(odds([7, 8, 9, 10])); // Output: [7, 9]
console.log(odds([2, 4, 6, 8])); // Output: []