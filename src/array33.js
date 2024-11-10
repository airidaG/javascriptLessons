// ## Write a function `strLengthSort` that sorts an array of strings by how long each string is. Put the shortest strings first.

// - Examples:
//   - strLengthSort(['Apple', 'Banana', 'Cherry']) --> ['Apple', 'Cherry', 'Banana']


function strLengthSort(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  // Example usage:
  console.log(strLengthSort(['Apple', 'Banana', 'Cherry'])); // Output: ['Apple', 'Cherry', 'Banana']
  