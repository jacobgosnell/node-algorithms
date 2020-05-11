/* Write a function which takes in a string and returns 
counts of each character in the String. */ 

// When asked a problem...
/* 
  1: Understand the problem
    - parrot the question back in different words
    - ask clarifying questions
  2: Give Concrete examples...
  3: Break it down
  4: Solve or Simplify
  5: Look back and refactor
*/ 

/* "So you want me write a function that can manipulate a string to analyze 
its contents and give a count for each character?? " */ 

/* can do all the letters have to output in lowercase? */ 

// Give a concrete example
// charCount("Your PIN number is 1234!")
/* {
  1: 1, 
  2: 1, 
  3: 1,
  4: 1,
  b: 1,
  e: 1,
  i: 2,
  m: 1,
  n: 2
  o: 1,
  p: 1,
  r: 2,
  s: 1,
  u: 2,
  y: 1
} */

/* Function Declarations only run once the program has read the function 
invocation */

// 3: Break it down 
/* 
function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string
} 
*/ 

/* 
function charCount(str) {
  make object to return at end
  
  iterate over a string, for each character...
    if the char is a number/letter AND is a key in object, add one to the count
    if the char is a number/letter AND not in object, add it to object and set value to 1
    if char is something else( space, period, etc.) don't do anything

  return object with data inside of it
}
*/

// Iterative Approach
function iterativeCharCount(str) {
  // make object to return at end
  let result = {};
  // iterate over a string
  for (let char of str) {
    char = char.toLowerCase()
    // if the char is a number/letter AND is a key in object, 
    if(result[char] > 0) {
      // increment the value of the string index property of the result object by 1
      result[char]++; 
    } else {
      //  if the char is a number/letter AND not in object, add it to object and set value to 1
      result[char] = 1;
    }
    // result[char] simply sets the str[i] iterated value to the result object as a property
  }
  return result;
}
// 
function cleanedUpIterativeCharCount(str) {
  let obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(string) {
  var code = string.charCodeAt(0)
  if (!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) /* lower alpha (a-z) */ {
      return false;
    }
  return true;
}

charCodeAt(0)

/* 
  Refactoring Questions
  - can you check the result?
  - can you derive the result differently?
  - can you understand it at a glance?
  - can you use the result or method for some other problem?
  - can you improve the performance of your solution?
  - How have other people solved this problem?
*/ 

const result = iterativeCharCount("Your PIN number is 1234!");
const resultTwo = cleanedUpIterativeCharCount("Hello therE!!");
console.log(result)
console.log(resultTwo)




