// ## Declaring the array

let myArray = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// 1. print the 3rd item here

// console.log(myArray[2]);

// 2. change the 'thursday' value to null here

// myArray[4] = null;
// console.log(myArray);


// 3. print the position of step 2

myArray[4] = null;

let position = myArray.indexOf(null);

console.log("Position of changed value (null):", position);