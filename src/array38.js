// ## We have an array of words that are stored in as strings.

// // Initial: [ 'apple', 'pear', 'cherry' ];

// Let's capitalize all the words we have within this array.\*
// // Result: [ 'APPLE', 'PEAR', 'CHERRY' ];

// Then store the new array we created in a variable.

// - The words will still be strings, just as before.


const wordsArray = ['apple', 'pear', 'cherry'];

// Use map() to capitalize each word
const capitalizedArray = wordsArray.map(word => word.toUpperCase());

console.log(capitalizedArray); // ['APPLE', 'PEAR', 'CHERRY']
