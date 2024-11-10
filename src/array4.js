
// ## Write a function `sumNumbers` which is given an array of numbers and returns the sum of the numbers. Do the same with reduce() method.

// - Example:
//   - sumNumbers([1, 4, 8]) --> 13


// const sumNumbers = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.lenght; i++){
//         sum += numbers[i];
//     }
//     return sum;

// }

// // Example usage:
// console.log(sumNumbers([1, 4, 8])); // Output: 13


// ==========================

function sumNumbers(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Example usage:
console.log(sumNumbers([1, 4, 8])); // Output: 13