//count how many substr in str
function naiveStringSearch(str, substr) {
  //0. Check if str.length > substr
  //1. Check the first char of substr match the first char of str
  //2. If match check the second char and so on...If all substr match count++
  //3. If not match check the first char of substr with the next char of str
  //4. Repeat until the char at str.length - substr.length

  if (str.length < substr.length) return 0;

  let count = 0;
  let strIdx = 0;
  let subStrIdx = 0;

  while (strIdx < str.length) {
    if (str[strIdx] === substr[subStrIdx]) {
      strIdx++;
      subStrIdx++;
      if (subStrIdx === substr.length) {
        count++;
        subStrIdx = 0;
      }
    } else {
      strIdx++;
    }
  }
  return count;
}

module.exports = naiveStringSearch;
