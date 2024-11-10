// ## Write a function `leetspeak` Challenge 4:which is given a string, and returns the leetspeak equivalent of the string.

// - To convert text to its leetspeak version, make the following substitutions:

//   - A => 4,
//   - E => 3,
//   - G => 6,
//   - I => 1,
//   - O => 0,
//   - S => 5,
//   - T => 7

// - HINT: What is the best data structure to represent the substitutions?

// - Examples:
//   - leetspeak('Leet') --> "l337"
//   - leetspeak('ORANGE') --> "0r4n63"


function leetspeak(str) {
    // Define the leetspeak substitutions in an object
    const leetDict = {
      'A': '4',
      'E': '3',
      'G': '6',
      'I': '1',
      'O': '0',
      'S': '5',
      'T': '7'
    };
  
    // Convert the string to lowercase for consistency with the example
    let result = '';
  
    // Iterate through each character in the input string
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toUpperCase(); // Make the character uppercase for matching
      
      // Check if the character has a leetspeak equivalent
      if (leetDict[char]) {
        result += leetDict[char]; // Replace with leetspeak equivalent
      } else {
        result += str[i]; // Otherwise, keep the original character
      }
    }
    
    return result;
  }
  
  // Example usage:
  console.log(leetspeak('Leet'));    // Output: "l337"
  console.log(leetspeak('ORANGE')); // Output: "0r4n63"
  