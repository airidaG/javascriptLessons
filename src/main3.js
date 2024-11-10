// ## Write a function `numberJoinerFor` which does the same thing as `numberJoinerWhile`, except using a `for` loop internally.

"use strict";

const start = +prompt("start number:");
const end = +prompt("end number:");

// function numberJoinerFor(start, end) {
//   let result = "";
//   for (let i = start; i <= end; i++) {
//     if (result !== "") {
//       result += "_";
//     }
//     result += i;
//   }
//   return result;
// }

// console.log(numberJoinerFor(start, end));


 const numberJoinerFor = (start, end) => {
    let result = "";
    for (let i = start; i <= end; i++) {
      if (result !== "") {
        result += "_";
      }
      result += i;
    }
    return result;
  }

  console.log(numberJoinerFor(start, end));