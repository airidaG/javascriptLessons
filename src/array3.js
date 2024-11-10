// ## Write a function `max` that takes an array of numbers returns the highest number in the array.

"use strict"

const max = (numbers) =>{
    if (numbers.length === 0) {
        return null; // Return null if the array is empty
    }
    let highest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }
    return highest;
}

// Example usage:
console.log(max([3, 7, 2, 9, 5])); // Output: 9