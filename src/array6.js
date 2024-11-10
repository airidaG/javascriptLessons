// # Given an array of numbers, return their product. Use reduce metod.

// - Example
//   - product([2, 4, 6]); // => 48 (i.e., 2 _ 4 _ 6)
//   - product([-10, 10]); // => -100 (i.e., -10 \* 10)

const product = (numbers) => {
    return numbers.reduce((accumulator, current) => accumulator * current, 1);
};

// Example usage:
console.log(product([2, 4, 6])); // Output: 48
console.log(product([-10, 10])); // Output: -100