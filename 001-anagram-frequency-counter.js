/*
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed 
from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

//////////////////////
function validAnagram(s1, s2) {
  //1. Compare 2 strings, if length not match return false
  if (s1.length !== s2.length) {
    return false;
  } else {
    if (s1.length === 0 && s2.length === 0) return true;
    else {
      //2. If 2 strings have same lenth then
      //  2.1. Create 2 objects which keys are the characters of each string, and values are the
      //      frequency (number) of the "key" appears in the string
      let s1FreqCounter = {};
      let s2FreqCounter = {};
      for (const char of s1) {
        s1FreqCounter[char] = (s1FreqCounter[char] || 0) + 1;
      }
      //console.log(s1FreqCounter);
      for (const char of s2) {
        s2FreqCounter[char] = (s2FreqCounter[char] || 0) + 1;
      }
      //console.log(s2FreqCounter);
      //  2.2. Compare 2 objects must be "equal"
      for (const keys in s1FreqCounter) {
        if (!keys in s2FreqCounter) return false; //all keys must match
        if (s2FreqCounter[keys] !== s1FreqCounter[keys]) return false; //all values must match
      }
      return true;
    }
  }
}

module.exports = validAnagram;
