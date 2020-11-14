// cache - saving data you've already seen
// isUnique takes an array and tests to see if the
// arr has all unique vals

function isUnique (arr) {
  // initialize cache obj in order to
  // do prop lookups (constant)
  const cache = {};
  // initializing result to true
  let result = true;

  // iterate over each el of array
  for (let i = 0; i< arr.length; i++) {
    // builds an object 
    // sets vals of arr to prop value
    // sets prop val to true or false
    // depending on condition (if val already exists)
    if (cache[arr[i]]) {
      result = false
      console.log(cache);
    } else {
      cache[arr[i]] = true;
      console.log(cache);
    }
  }

  return result;
}

console.log(isUnique([1,2,3]) === true);