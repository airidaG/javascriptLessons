// ## Write the `removeZAnimals` function as described below:

// ```javascript
// function removeZAnimals() {
//   // 1) declare an array with some strings
//   const animals = ["alligator", "zebra", "crocodile", "giraffe"];

//   // create an empty array (we will fill this with strings from the previous array)
//   let animalsWithoutZ = [];

//   // 2) loop through "animals"

//   // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name contains the letter "z"

//   // 4) return "animalsWithoutZ"
// }
// ```


function removeZAnimals() {
    // 1) declare an array with some strings
    const animals = ["alligator", "zebra", "crocodile", "giraffe"];
  
    // create an empty array (we will fill this with strings from the previous array)
    let animalsWithoutZ = [];
  
    // 2) loop through "animals"
    for (let animal of animals) {
      // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name contains the letter "z"
      if (!animal.includes("z")) {
        animalsWithoutZ.push(animal);
      }
    }
  
    // 4) return "animalsWithoutZ"
    return animalsWithoutZ;
  }
  
  // Example usage:
  console.log(removeZAnimals());  // Output: ["alligator", "crocodile", "giraffe"]
  