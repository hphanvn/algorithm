const naiveStringSearch = require("./006-naive-string-search");

test("abcdef - gh - 0", () => {
  expect(naiveStringSearch("abcdef", "gh")).toBe(0);
});

test("Xin chao tat ca moi nguoi - bc - 0", () => {
  expect(naiveStringSearch("Xin chao tat ca moi nguoi", "bc")).toBe(0);
});

test("Xin chao tat ca moi nguoi - a - 3", () => {
  expect(naiveStringSearch("Xin chao tat ca moi nguoi", "a")).toBe(3);
});

test("xin xin chao tat ca moi nguoi nguoi - xin - 2", () => {
  expect(naiveStringSearch("xin xin chao tat ca moi nguoi nguoi", "xin")).toBe(
    2
  );
});

test("xin xin chao tat ca moi moi moi moi nguoi - moi - 4", () => {
  expect(
    naiveStringSearch("xin xin chao tat ca moi moi moi moi nguoi", "moi")
  ).toBe(4);
});
test("Xin chao tat ca moi nguoi nguoi - nguoi - 2", () => {
  expect(naiveStringSearch("Xin chao tat ca moi nguoi nguoi", "nguoi")).toBe(2);
});
