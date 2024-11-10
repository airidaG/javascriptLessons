// # Given an array and a value, write function `findInHaystack` which returns true if the value is found in the array and false otherwise.

// The array doesn't need to contain a single type of data.

// When searching an array for something, it's common to refer to the array as the "haystack" and the thing being searched for as the "needle", as in, "Looking for a needle in a haystack."

// - Example:
//   - findInHaystack([1, 2, 30, -10], 480); --> false
//   - findInHaystack([1, 2, 30, -10], 30); --> true
//   - findInHaystack(['waffle', 'giraffe', 'banana'], 'giraffe'); --> true
//   - findInHaystack(['waffle', 'giraffe', 'banana'], 'lemons'); --> false

// ---



const findInHaystack = (haystack, needle) => {
    return haystack.includes(needle);
};

// Example usage:
console.log(findInHaystack([1, 2, 30, -10], 480)); // Output: false
console.log(findInHaystack([1, 2, 30, -10], 30));  // Output: true
console.log(findInHaystack(['waffle', 'giraffe', 'banana'], 'giraffe')); // Output: true
console.log(findInHaystack(['waffle', 'giraffe', 'banana'], 'lemons'));  // Output: false
