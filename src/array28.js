// ## Write a function called `split` that does the same thing as String.split

// It should take two inputs:

// - a string and
// - a delimiter string

// Do not use the native .split() method for this. Your task is to reverse-engineer .split() and write your own.

// - Examples:
//   - split('a-b-c', '-') --> ['a', 'b', 'c']
//   - split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
//   - split('xyz', 'r') --> ['xyz']


function split(str, delimiter) {
    let result = [];  // Array to store the substrings
    let currentSubstring = '';  // Temporary string to build the current substring
    
    for (let i = 0; i < str.length; i++) {
      // If we find the delimiter
      if (str.slice(i, i + delimiter.length) === delimiter) {
        result.push(currentSubstring);  // Push the current substring into the result array
        currentSubstring = '';  // Reset the current substring
        i += delimiter.length - 1;  // Skip past the delimiter
      } else {
        currentSubstring += str[i];  // Add the current character to the current substring
      }
    }
    
    // Push the last substring (after the last delimiter, or if there were no delimiters)
    result.push(currentSubstring);
  
    return result;
  }
  
  // Example usage:
  console.log(split('a-b-c', '-')); // Output: ['a', 'b', 'c']
  console.log(split('APPLExxBANANAxxCHERRY', 'xx')); // Output: ['APPLE', 'BANANA', 'CHERRY']
  console.log(split('xyz', 'r')); // Output: ['xyz']
  