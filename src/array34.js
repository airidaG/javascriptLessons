// ## Write a function `sumSort`. Given an array of array of numbers like:

// var arr = [
// [1, 3, 4],
// [2, 4, 6, 8],
// [3, 6]
// ];

// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.

// - Example:
//   - sumSort([
//     [9, 1, 9],
//     [2],
//     [4, 5]
//     ]) --> [[2], [4, 5], [9, 1, 9]]

function sumSort(arr) {
    return arr.sort((a, b) => {
      const sumA = a.reduce((sum, num) => sum + num, 0); // sum of elements in array a
      const sumB = b.reduce((sum, num) => sum + num, 0); // sum of elements in array b
      return sumA - sumB; // Sort by the difference of sums
    });
  }
  
  // Example usage:
  console.log(sumSort([
    [9, 1, 9],
    [2],
    [4, 5]
  ])); // Output: [[2], [4, 5], [9, 1, 9]]
  
