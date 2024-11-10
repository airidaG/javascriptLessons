// ## Write a function "makeBox" which is given a width and height and returns a hollow box of those dimensions.

// - Example:
//   - makeBox(6, 4)
//     `******`
//     `*    *`
//     `*    *`
//     `******`

"use strict"

const row = +prompt("Enter row size:");
const column = +prompt("Enter box height:");

// const makeBox = (row, column) => {
//     const width = "*".repeat(row);
//     const square = Array(collumn).fill(width).join("\n");
//     return  square;
// }



const makeBox = (row, column) => {
    if (column <= 0 || row <= 0) {
        return "";
    }
    let box = "";
    box += "*".repeat(row) + "\n";
    for (let i = 1; i < column - 1; i++){
        if (row > 1){
            box += "*" + " ".repeat(row - 2) + "*" + "\n";
        } else {
            box += "*" + "\n";
        }
    }
    if (column > 1) {
        box += "*".repeat(row) + "\n";
    }

    return box;
};

console.log(makeBox(row, column));

