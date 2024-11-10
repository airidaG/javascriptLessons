
// ## Write a function `sortArray` that takes an array of numbers as input and sorts them in ascending order and returns.

// - using the bubble sort algorithm,

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they are in the wrong order
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  


// - using the selection sort algorithm

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j; // Find the index of the smallest element
        }
      }
      // Swap the smallest element with the current position
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  }
  

// - using the insertion sort algorithm

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Shift elements of arr[0..i-1], that are greater than key,
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  


// - using merge sort algorithm.

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid)); // Recursively sort the right half
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    // Merge the two sorted arrays into a single sorted array
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Concatenate any remaining elements from both left and right arrays
    return result.concat(left.slice(i), right.slice(j));
  }
  