// ## Write a function called `nicer`. It should clean up the language in its input sentence.

// - Forbidden words include

//   - heck,
//   - darn,
//   - dang,
//   - crappy.

// - Example:
//   - nicer('mom get the heck in here and bring me a darn sandwich.')--> 'mom get the in here and bring me a sandwich.'



function nicer(sentence) {
    // List of forbidden words
    const forbiddenWords = ['heck', 'darn', 'dang', 'crappy'];
  
    // Loop through each forbidden word and remove it from the sentence
    forbiddenWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 'gi' makes it case-insensitive and ensures whole words only
      sentence = sentence.replace(regex, '').trim(); // Remove the word and trim extra spaces
    });
  
    return sentence;
  }
  
  // Example usage:
  console.log(nicer('mom get the heck in here and bring me a darn sandwich.')); 
  // Output: "mom get the in here and bring me a sandwich."
  