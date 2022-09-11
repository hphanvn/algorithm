function isPalindrome(str) {
  //1. Check if string is null return true (special case)
  if (str.length === 0) {
    return true;
  }

  //2. Recursively compare char at index i vs length - 1 - i
  let charEqual;
  function compare(idx) {
    if (idx >= str.length / 2) return;
    charEqual = compare(idx + 1);
    return str[idx] === str[str.length - 1 - idx];
  }

  compare(0);
  return charEqual;
}

module.exports = isPalindrome;

//Solution
/*
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
*/
