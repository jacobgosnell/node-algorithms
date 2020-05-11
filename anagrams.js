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
}
*/

function validAnagram(firstStr, secStr) {
  if (firstStr.length !== secStr.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (val of firstStr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (val of secStr) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // console.log(frequencyCounter1)
  // console.log(frequencyCounter2)
  // compares two frequency Counters of both strings
  for (key in frequencyCounter1) {
    if(!(key in frequencyCounter2)) {
      return false
    }
    if (key === frequencyCounter2[key]) {
      return true
		}
  }
}


console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awesome')) // false
console.log(validAnagram('qwerty', 'qeywrty')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true