// ## Write a function `evens` which takes an array of numbers and returns a new array containing only the even numbers in the given array.


const evens = (numbers) => {
    return numbers.filter(number => number % 2 === 0);
};

// Example usage:
console.log(evens([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(evens([7, 8, 9, 10])); // Output: [8, 10]
console.log(evens([1, 3, 5, 7])); // Output: []