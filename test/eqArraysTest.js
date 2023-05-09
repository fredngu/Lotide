const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

describe("#eqArray", () => {
  it("Return true since [1, 2, 3] and [1, 2, 3] are the same", () => {
    const test1 = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.strictEqual(test1, true);
  });
  it("Return false since [1, 2, 3] and [3, 2, 1] are not in the same order", () => {
    const test2 = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.strictEqual(test2, false);
  });
  it("Return true since ['1', '2', '3'] and ['1', '2', '3'] are the same", () => {
    const test3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.strictEqual(test3, true);
  });
  it("Return false since ['1', '2', '3'] and ['1', '2', 3] are not the same since the last element 3 is a number and not a string", () => {
    const test4 = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.strictEqual(test4, false);
  });
});