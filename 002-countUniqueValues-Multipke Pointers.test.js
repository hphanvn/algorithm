// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

const countUniqueValues = require("./002-countUniqueValues-Multipke Pointers");

test("[1,1,1,1,1,2] has 2 unique numbers", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
});

test("[1,2,3,4,4,4,7,7,12,12,13] has 7 unique numbers", () => {
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
});

test("[] has 0 unique numbers", () => {
  expect(countUniqueValues([])).toBe(0);
});

test("[-2,-1,-1,0,1] has 4 unique numbers", () => {
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});
