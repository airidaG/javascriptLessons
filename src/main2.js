// ## Write a function `numberJoinerWhile` which is given a start number and an end number.

// It should return a string of the numbers joined together by the `_` character.
// Use a `while` loop to do this.

// - Examples:
//   - numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
//   - numberJoinerWhile(12, 14) --> '12_13_14'

"use strict";

const start = +prompt("start");
const end = +prompt("end");

function numberJoinerWhile(start, end) {
  let result = "";
  let i = start;

  while (i <= end) {
    if (result !== "") {
      result += "_";
    }
    result += i;
    i++;
  }
  return result;
}

console.log(numberJoinerWhile(start, end));

// function numberJoinerWhile(start, end) {
//     let result = "";
//     let i = start;
  
//     while (i <= end) {
//       if (result !== "") {
//         result += "_";
//       }
//       result += i;
//       i++;
//     }
//     return result;
//   }
  
//   console.log(numberJoinerWhile(1, 3));
