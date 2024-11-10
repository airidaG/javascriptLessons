// ## Write a function `numberJoinerFancy` which does the same thing as `numberJoinerWhile`, except it takes an optional third argument specifying the separator between the numbers.

"use strict";

// const start = +prompt("start");
// const end = +prompt("end");

// function numberJoinerFancy(start, end) {
//   let result = "";
//   let i = start;
// const symbol = prompt("seperator:");

//   while (i <= end) {
//     if (result !== "") {
//       result += symbol;
//     }
//     if(symbol == "" && result !== ""){
//         result += "_";
//     }
//     result += i;
//     i++;
//   }
//   return result;
// }
 
// console.log(numberJoinerFancy(start, end));
// =========================================================
// const start = +prompt("start");
// const end = +prompt("end");
// const separator = prompt("separator:") || "_";

// function numberJoinerFancy(start, end, separator="_")  {
//   let result = "";
//   let i = start;


//   while (i <= end) {
//     if (result !== "") {
//       result += separator;
//     }
//     result += i;
//     i++;
//   }
//   return result;
// }
 
// console.log(numberJoinerFancy(start, end, separator));
// ==================================================

const start = +prompt("start");
const end = +prompt("end");
const separator = prompt("separator:") || "_";

const numberJoinerFancy = (start, end, separator="_") => {
  let result = "";
  let i = start;


  while (i <= end) {
    if (result !== "") {
      result += separator;
    }
    result += i;
    i++;
  }
  return result;
}
 
console.log(numberJoinerFancy(start, end, separator));