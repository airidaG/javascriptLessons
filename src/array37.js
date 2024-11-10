// ## You can use the map method to transform each item in an array into something else. map() returns a new array leaving the original array unchanged.

// ## We have an array of numbers that are stored as strings.

// // Initial: [ '1', '2', '3', '4', '5' ];

// Let's transform these strings into numbers using the map method.
// // Result: [ 1, 2, 3, 4, 5 ];

// - Then store the new array we created in a variable.


const stringArray = ['1', '2', '3', '4', '5'];

// Use map() to convert each string into a number
const numberArray = stringArray.map(str => Number(str));

console.log(numberArray); // [1, 2, 3, 4, 5]
