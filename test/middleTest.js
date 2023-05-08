const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const test1 = middle([1]);
    assert.deepEqual(test1, []);
  });
  it("returns [] for [1, 2]", () => {
    const test2 = middle([1, 2]);
    assert.deepEqual(test2, []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    const test3 = middle([1, 2, 3]);
    assert.deepEqual(test3, [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const test4 = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(test4, [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    const test5 = middle([1, 2, 3, 4]);
    assert.deepEqual(test5, [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4]", () => {
    const test6 = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(test6, [3, 4]);
  });
});