/*  
Anagrams

Given two strings, write a function to
determine if the second string is an anagram
of the first.  An anagram is a word, phrase,
or name formed by rearranging the letters of
another, such as cinema, formed from iceman. 

** Hint... try using a frequency counter
(frequency counters work well with linear structures
 such as strings or arrays)

 validAnagram('', '') // true
 validAnagram('aaz', 'zza') // false
 validAnagram('anagram', 'nagaram') // true
 validAnagram('rat', 'car') // false
 validAnagram('awesome', 'awesome') // false
 validAnagram(qwerty', 'qeywrty') // true
 validAnagram('texttwisttime', 'timetwisttext') // true
*/

// Pseudocode

/* 
function validAnagram(firstStr, secStr) {
  1. check base case to see if the strings are a different length, results in false
  2. if they are the same length, and hold all the same characters, return true
    regardless if they are out of order.
    i. first loop over the firstStr and construct a lookup object
      of every character and the number of times it occurs
    ii. second compare that object to the secStr by looping
      over the secStr and subtracting the frequency count by 1 for each letter found
      if there is no letter found, return false since the test has failed.
}
*/

function validAnagramSolution(firstStr, secStr) {
  if (firstStr.length !== secStr.length) {
    return false
  }
  const lookup = {}

  for (let i=0; i < firstStr.length; i++) {
    let letter = firstStr[i];
    lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
  }
  console.log(lookup)
  // constructs lookup, next use it to compare with 2nd str

  for(let i=0; i < secStr.length; i++) {
    let letter = secStr[i]
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  console.log(lookup)
  return true;
}


console.log(validAnagramSolution('aaz', 'zza')) // false
console.log(validAnagramSolution('', '')) // true
console.log(validAnagramSolution('anagram', 'nagaram')) // true
console.log(validAnagramSolution('rat', 'car')) // false
console.log(validAnagramSolution('awesome', 'awesome')) // false
console.log(validAnagramSolution('qwerty', 'qeywrty')) // true
console.log(validAnagramSolution('texttwisttime', 'timetwisttext')) // true