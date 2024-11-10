// Write a function `gcd` that returns the Greatest Common Divisor of two numbers. If no GCD exists, return 1.

// - Greatest Common Divisor --> https://tinyurl.com/gr84qca

// - Examples:
//   - gcd(5, 1) --> 1 - isMultipleOf(3, 15) --> true
//   - isMultipleOf(2, 7) --> false
//   -
//   - gcd(3, 15) --> 3
//   - gcd(50, 20) --> 10

"use strict"

const firstNumber = +prompt("Enter a number:");
const secondNumber = +prompt("Enter another number:");

const gcd = (firstNumber, secondNumber) => {
    if  (firstNumber === 0 &&  secondNumber === 0) {
        return 1;
    } else if (firstNumber === 0) {
        return secondNumber;
    }
     else if (secondNumber === 0) {
        return firstNumber;
    }
    while (secondNumber !==0) {
        let remainder = firstNumber % secondNumber;
        firstNumber = secondNumber;
        secondNumber = remainder;
    }
    return firstNumber;
}

console.log(gcd(firstNumber, secondNumber));
