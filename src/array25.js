// ## Write a function `findLongestWord` that takes a string of words and returns the longest word in that string. If there are multiple words with the same maximum length return the first longest word.

// - Example:
//   - findLongestWord('a book full of dogs') --> 'book'

// ---

function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Initialize a variable to store the longest word
    let longestWord = '';
  
    // Loop through the words to find the longest
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  console.log(findLongestWord('a book full of dogs')); // Output: "book"
  