// ## Given two arrays, write function `glueArrays` which returns a new array that is a concatenation of the two given arrays.

// - Example:
//   - glueArrays([1, 2, 3], [4, 5, 6]); --> [1, 2, 3, 4, 5, 6]
//   - glueArrays([-10, undefined], [true, 'waffles']); --> [-10, undefined, true, 'waffles']
//   - glueArrays([], []); --> []
//   - glueArrays([20, 104], []); --> [20, 104]
//   - glueArrays([], ['hello', 'world']); --> ['hello', 'world']

// ---

const glueArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};

// Example usage:
console.log(glueArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(glueArrays([-10, undefined], [true, 'waffles'])); // Output: [-10, undefined, true, 'waffles']
console.log(glueArrays([], [])); // Output: []
console.log(glueArrays([20, 104], [])); // Output: [20, 104]
console.log(glueArrays([], ['hello', 'world'])); // Output: ['hello', 'world']