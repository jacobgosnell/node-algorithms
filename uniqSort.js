// Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

function uniqSort(arr) {
  const cache = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
    if (!cache[arr[i]]) {  // does the element not exist in cache yet?
      result.push(arr[i]); // if so, push the value to my result array
      cache[arr[i]] = true; // and set the value of the cache array value to true;
      console.log(cache);
    }
  }
  // returns in ascending order
  return result.sort((a,b) => a - b);
};

console.log(uniqSort([4,2,2,3,2,2,2])); // => [2,3,4]