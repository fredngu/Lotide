const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it("returns [1, 2, 3, 4, 5, 6] from array [1, 2, [3, 4], 5, [6]]", () => {
    const test1 = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(test1, [1, 2, 3, 4, 5, 6]);
  });
  it("returns [21, 16, 34, 20, 92, 83, 42, 54, 13, 34] from array [21, [16, 34, 20], 92, 83, [42, 54, 13, 34]]", () => {
    const test2 = flatten([21, [16, 34, 20], 92, 83, [42, 54, 13, 34]]);
    assert.deepEqual(test2, [21, 16, 34, 20, 92, 83, 42, 54, 13, 34]);
  });
});