
// ## Write a function `isVowel` that takes a character (i.e. a string of length 1) as input and returns true if it is a vowel, false otherwise.

// - Useful resource: -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// - Examples:
//   - isVowel('c') --> false
//   - isVowel('e') --> true
//   - isVowel('A') --> true
//   - sVowel(99) --> false
//   - isVowel({e: "Elephant"}) --> false


const isVowel = (char) => {
    // Ensure that the input is a single character and it's a string
    if (typeof char === 'string' && char.length === 1) {
        return 'aeiou'.includes(char.toLowerCase());
    }
    return false;
};

// Example usage:
console.log(isVowel('c'));  // Output: false
console.log(isVowel('e'));  // Output: true
console.log(isVowel('A'));  // Output: true
console.log(isVowel(99));   // Output: false
console.log(isVowel({e: "Elephant"})); // Output: false
