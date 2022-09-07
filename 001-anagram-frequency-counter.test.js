const validAnagram = require("./001-anagram-frequency-counter");

/*
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
 */
test("same size empty string to be true", () => {
  expect(validAnagram("", "")).toBeTruthy();
});

test("aaz vs zza to be false", () => {
  expect(validAnagram("aaz", "zza")).toBeFalsy();
});

test("'anagram', 'nagaram'  to be true", () => {
  expect(validAnagram("anagram", "nagaram")).toBeTruthy();
});

test("rat , car  to be false", () => {
  expect(validAnagram("rat", "car")).toBeFalsy();
});

test("'amanaplanacanalpanama', 'acanalmanplanpamana' to be false", () => {
  expect(
    validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")
  ).toBeFalsy();
});

test("'qwerty', 'qeywrt' to be true", () => {
  expect(validAnagram("qwerty", "qeywrt")).toBeTruthy();
});

test("'texttwisttime', 'timetwisttext' to be true", () => {
  expect(validAnagram("texttwisttime", "timetwisttext")).toBeTruthy();
});
