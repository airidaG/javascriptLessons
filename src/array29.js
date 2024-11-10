
// ## Write a function `longLongVowels` which is given a string, and returns a version of that string extending any long vowels to 5 characters.

// - Examples:
//   - longLongVowels('Good')--> 'Goooood'
//   - longLongVowels('Cheese') --> 'Cheeeeese'
//   - longLongVowels('Man') --> 'Man'


function longLongVowels(str) {
    // Define the vowels we want to extend
    const vowels = 'aeiouAEIOU';
    
    let result = '';  // String to store the modified result
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      // If the character is a vowel, extend it
      if (vowels.includes(char)) {
        result += char.repeat(5);  // Repeat the vowel 5 times
      } else {
        result += char;  // Otherwise, add the character as is
      }
    }
    
    return result;
  }
  
  // Example usage:
  console.log(longLongVowels('Good'));   // Output: 'Goooood'
  console.log(longLongVowels('Cheese')); // Output: 'Cheeeeese'
  console.log(longLongVowels('Man'));    // Output: 'Man'
  