// ## Write functions `countEvens` which takes an array of integers and returns the count of even integers in the array.

// - Example:
//   - countEvens([1, 2, 3, 4, 5]); --> 2
//   - countEvens([10, 10, 10]); --> 3
//   - countEvens([1, 1, 1, 2]); --> 2


const countEvens = (numbers) => {
    return numbers.filter(number => number % 2 === 0).length;
};

// Example usage:
console.log(countEvens([1, 2, 3, 4, 5])); // Output: 2
console.log(countEvens([10, 10, 10])); // Output: 3
console.log(countEvens([1, 1, 1, 2])); // Output: 2