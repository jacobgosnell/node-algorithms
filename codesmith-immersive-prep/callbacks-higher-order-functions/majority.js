/* Create a function majority that accepts an array and a callback. 
The callback will return either true or false. majority will iterate through the 
array and perform the callback on each element until it can be determined if the 
majority of the return values from the callback are true. If the number of true 
returns is equal to the number of false returns, majority should return false. */


/* Just iterate over the array, counting the number of trues returned by the 
callback, and return whether or not the number of trues is 
greater than half the size of the array*/ 


function majority(array, callback) {
  let count = 0;
  array.forEach(val => callback(val) && count++);
  return count > array.length / 2;
}



const isOdd = num => num % 2 === 1;

console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/* Alternative Approach using a frequency counter

// ADD CODE HERE
function majority(array, callback) {
	const result = array.map(el => callback(el))
  let obj = {}
  for(let el of result) {
    obj[el] = (obj[el] || 0) + 1;
  }
  return obj.true > obj.false
}
// Uncomment these to check your work!

// callback returns true or false
const isOdd = function(num) { return num % 2 === 1; };

console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

*/ 