const { add, subtract } = require("./app");

describe("Arithmetic Tests", () => {
  test("It should add the numbers correctly.", () => {
    let result = add(3, 4);
    let expected = 7;
    expect(result).toBe(expected);
  });

  test("It should subtract the numbers correctly.", () => {
    let result = subtract(8, 4);
    let expected = 4;
    expect(result).toBe(expected);
  });
});
