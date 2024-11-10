// ## Write a function `removeAnyWordWithZ` that takes 1 argument: an array of strings

// It should return a new array that has all of the items in the passed-in array minus any words that contain the letter `z` or `Z` (case-insensitive).


function removeAnyWordWithZ(arr) {
    // Create a new array to hold words without "z" or "Z"
    let result = [];
  
    // Loop through each word in the input array
    for (let word of arr) {
      // Check if the word contains "z" or "Z" (case-insensitive)
      if (!word.toLowerCase().includes("z")) {
        result.push(word);
      }
    }
  
    // Return the result array
    return result;
  }
  
  // Example usage:
  console.log(removeAnyWordWithZ(["zebra", "apple", "banana", "Zebra", "orange"])); 
  // Output: ["apple", "banana", "orange"]
  