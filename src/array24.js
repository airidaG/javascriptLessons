// ## Write a function `reverse` that computes the reversal of a string.

// - Example:
//   - reverse("skoob") --> "books"


function reverse(str) {
    // Convert the string into an array of characters, reverse it, and then join it back into a string
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(reverse("skoob")); // Output: "books"
  
