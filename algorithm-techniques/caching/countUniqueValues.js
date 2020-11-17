/* Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in the array.  There can be negative 
numbers in the array, but it will always be sorted. */

function countUniqueValues(arr) {
  // initialize a count variable and set it to 0
  let data = {};
  let count = [];
  for(let val of arr) {
    // set the current iterated val to be prop with corresponding val as its frequency
    data[val] = (data[val] || 0) + 1;
  }
  for(let [key, val] of Object.entries(data)) {
    if(val === 1) {
      // store the key variable in an array
      count.push(Number(key));
      // find the sum of the array
    }
  }
  return count.reduce((a,b) => a+b, 0);
}

function countUniqueValuesMultPointers(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(arr[i]);
  }
  return i + 1;
}

// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

console.log(countUniqueValuesMultPointers([1,2,2,5,7,7,99])); // 5