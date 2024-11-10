
// ## Write a function called `capitalizeAll` It should take as input a sentence and capitalize the first letter of every word in the sentence.

// - Examples:
//   - capitalizeAll('hello world') --> 'Hello World'
//   - capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'


function capitalizeAll(sentence) {
    // Split the sentence into words, capitalize the first letter of each word, and then join them back together
    return sentence
      .split(' ') // Split the sentence into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the rest lowercase
      .join(' '); // Join the words back into a single string
  }
  
  // Example usage:
  console.log(capitalizeAll('hello world')); // Output: 'Hello World'
  console.log(capitalizeAll('every day is like sunday')); // Output: 'Every Day Is Like Sunday'
  