// ## Write a function `removeWordsWithChar` that takes 2 arguments:

// - an array of strings
// - a string of length 1 (ie: a single character)

// - It should return a new array that has all of the items in the first argument except those that contain a character in the second argument (case-insensitive).

// - Examples:
//   - removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
//   - removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']


function removeWordsWithChar(arr, char) {
    // Create a new array to hold words that don't contain the given character
    let result = [];
  
    // Loop through each word in the input array
    for (let word of arr) {
      // Convert both the word and the character to lowercase and check if the word contains the character
      if (!word.toLowerCase().includes(char.toLowerCase())) {
        result.push(word);
      }
    }
  
    // Return the result array
    return result;
  }
  
  // Example usage:
  console.log(removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b')); // Output: ['aaa', 'ccc']
  console.log(removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E')); // Output: ['pizza']
  