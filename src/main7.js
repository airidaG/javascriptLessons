// ## Write a function `makeSquare` which is given a size and returns a square of that size using asterisks.

// - Example:
//   - makeSquare(5)
//     `*****`
//     `*****`
//     `*****`
//     `*****`
//     `*****`


"use strict"

const size = +prompt("Enter the desired size:");

const makeSquare = (size) => {
    const row = "*".repeat(size);
    const square = Array(size).fill(row).join("\n");
    return square;
}

console.log(makeSquare(size));
