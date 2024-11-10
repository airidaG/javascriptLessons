// ## Turn this list of numbers into price strings with two digits and a dollar sign at the beginning.

// // Initial: [5, 4.23, 6.4, 8.09, 3.20];

// Dont forget to:

// - Turn the numbers into strings
// - Concatenate/ add the dollar sign
// - Make the prices have decimals
// - Store the new array we created in a variable
//   // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ];


const numbersArray = [5, 4.23, 6.4, 8.09, 3.20];

// Use map() to turn numbers into price strings with two decimals and a dollar sign
const priceStrings = numbersArray.map(num => `$${num.toFixed(2)}`);

console.log(priceStrings); // ['$5.00', '$4.23', '$6.40', '$8.09', '$3.20']
