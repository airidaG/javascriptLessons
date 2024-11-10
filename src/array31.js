
// ## Write a function `recognizeEmployees` that takes two arguments:

// - 1. an array of names of people to be recognized
// - 2. an array of employees of the month

// Return an array telling everyone that they did a great job, except employees of the month did an outstanding job.

// - Examples:

//   - recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
//     --> ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']

//   - recognizeEmployees(['Susan',Challenge 4: 'Anthony', 'Bill'], ['Bill', 'Susan'])
//     --> ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']

//   - recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
//     --> ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']


function recognizeEmployees(names, employeesOfTheMonth) {
    return names.map(name => {
      if (employeesOfTheMonth.includes(name)) {
        return `Outstanding job, ${name}!`;
      } else {
        return `Great job, ${name}!`;
      }
    });
  }
  
  // Example usage:
  console.log(recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill']));
  // Output: ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
  
  console.log(recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan']));
  // Output: ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
  
  console.log(recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan']));
  // Output: ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
  