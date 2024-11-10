// ## Given an array and a value, write function `firstIndexOf` which returns the index of the first occurence of the value. If the value is not found, returns -1.

// The array doesn't need to contain a single type of data.

// - Example:
//   - firstIndexOf([10, 20, 30, 20], 20); --> 1
//   - firstIndexOf([10, 20, 30, 20], 17); --> -1
//   - firstIndexOf(['giraffe', giraffe', 'banana'], 'giraffe'); --> 0
//   - firstIndexOf(['giraffe', giraffe', 'banana'], 'banana'); --> 2

// ---

const firstIndexOf = (arr, value) => {
    return arr.indexOf(value);
};

// Example usage:
console.log(firstIndexOf([10, 20, 30, 20], 20));  // Output: 1
console.log(firstIndexOf([10, 20, 30, 20], 17));  // Output: -1
console.log(firstIndexOf(['giraffe', 'giraffe', 'banana'], 'giraffe')); // Output: 0
console.log(firstIndexOf(['giraffe', 'giraffe', 'banana'], 'banana')); // Output: 2
