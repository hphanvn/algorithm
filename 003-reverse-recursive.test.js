// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = require("./003-reverse-recursive");

test("'awesome' --> 'emosewa'", () => {
  expect(reverse("awesome")).toBe("emosewa");
});

test("'rithmschool' --> 'loohcsmhtir'", () => {
  expect(reverse("rithmschool")).toBe("loohcsmhtir");
});

test("' --> ''", () => {
  expect(reverse("")).toBe("");
});

test("'12 34 ab cd' --> 'dc ba 43 21'", () => {
  expect(reverse("12 34 ab cd")).toBe("dc ba 43 21");
});
