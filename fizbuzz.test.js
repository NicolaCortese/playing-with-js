const { expect, it } = require("@jest/globals");
const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("returns fizz when given 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("returns 4 when given 4", () => {
    expect(fizzbuzz(4)).toBe(4);
  });

  it("returns fizzbuzz when given 15", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});

describe("fizbuzz", () => {
  it("returns fizz when given 6", () => {
    expect(fizzbuzz(6)).toBe("fizz");
  });

  it("returns 8 when given 8", () => {
    expect(fizzbuzz(8)).toBe(8);
  });

  it("returns fizbuzz when given 15", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
