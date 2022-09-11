// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isPalindrome = require("./004-isPalindrome-recursion");

test("awesome is False", () => {
  expect(isPalindrome("awesome")).toBe(false);
});

test("foobar is False", () => {
  expect(isPalindrome("foobar")).toBe(false);
});

test("tacocat is True", () => {
  expect(isPalindrome("tacocat")).toBe(true);
});

test("amanaplanacanalpanama is True", () => {
  expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
});

test("empty to be True", () => {
  expect(isPalindrome("")).toBe(true);
});

test("abcdefghgfedcba to be True", () => {
  expect(isPalindrome("abcdefghgfedcba")).toBe(true);
});

test("amanaplanacanalpandemonium is False", () => {
  expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false);
});
