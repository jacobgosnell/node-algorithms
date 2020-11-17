/* Frequence Counters 
 
Usually uses objects or sets to collect values
or frequencies of values

This can often avoid the need for nested loops
or O(N^2) operations with arrays / strings 

Write a function called same, which accepts
two arrays. The function should return true
if every value in the array has its
corresponding value squared in the 
second array.  The frequency of values must be
the same.  */ 

/* Understand the Question */ 
/*  
  rephrase: write a function that takes in 2 
  arrays and returns true depending on
  if all the values of both arrays correspond 
  to the element number's value squared in 
  the second array while the frequency of values
  must be the same
*/

/* Naive Solution
   Has a nested loop, is O(n^2) run time
function same(arrayOne, arrayTwo) {
  // 
  if (arrayOne.length !== arrayTwo.length) {
    return false
  } 
  // loop over first array
  for(let i = 0; i < arrayOne.length; i++) {
    let correctIndex = arrayTwo.indexOf(arr1[i] ** 2)
    - indexOf is an array method that loops over and 
    finds the index of a certain value within an array
    - so line 33 reads find the indexOf arr1[i] squared value in arrayTwo
    - the result of line 33 holds the value 
    if(correctIndex === -1) {
      return false
    }
    arrayTwo.splice(correctIndex,1)
  }
  return true;
}
*/

// Frequency Counter Solution 
// time complexity O(n) - linear
function same(arr1, arr2) {
  // check to see if the frequency of values is the same
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  // populates frequencyCounter1 Object
  for(let val of arr1) {
    // the value of each key becomes a count for the frequency of each value in the array
    // each index value of arr1 becomes a property
    // and each value of each property is the count + 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  // populates frequencyCounter2 Object
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // now iterate over frequencyCounter1 and ...
  for(let key in frequencyCounter1) {
    // check for if there is no key of counter 1 squared in frequency counter 2
    // so if each key value of frequencyCounter1 squared in frequencyCounter2 is falsy return false
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // checks for each value of each property to be the same
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  return true
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
/* 
Output:

frequency counter keeps track of the
number of times a value occurs

frequencyCounter1 = { 
  '1': 1, 
  '2': 2, 
  '3': 1 
}
frequencyCounter2 = { 
  '1': 1, 
  '4': 2, 
  '9': 1 
}

2 separate loops are vastly better than 2 nested loops
*/
