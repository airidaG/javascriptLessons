// ## Write a function `factors` which is given a number and returns an array containing all its factors.

// - What are factors? --> https://tinyurl.com/gncg62o

// - Examples:
//   - factors(1) --> [1]
//   - factors(12) --> [1, 2, 3, 4, 6, 12]
//   - factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]


"use strict"

const number = +prompt("Enter a number to find its factors:");

const factor = (number) => {
    let result = [];

    for(let i = 1; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            result.push(i);
            if (i !== number / i) {
                result.push(number / i);
            }
        }
    }

    return result.sort((a, b) => a - b);
}

console.log(factor(number));
