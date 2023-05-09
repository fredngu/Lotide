const assert = require('chai').assert;
const without = require('../without');

describe("without", () => {
  it("Returns [2, 3] from [1, 2, 3] array, removing [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("Returns ['1', '2'] from ['1', '2', '3'] array, removing [1, 2, '3']. Only '3' is removed because '3' is a string", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
});