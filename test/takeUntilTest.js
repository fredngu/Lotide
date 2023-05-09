const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

describe("#takeUntil", () => {
  it("Returns [1,2,5,7,2] with callback function x => x < 0", () => {
    const test1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(test1, [1,2,5,7,2]);
  });
  it("Returns ['I've', 'been', 'to', 'Hollywood'] with callback function x => x === ',')", () => {
    const test2 = takeUntil(data2, x => x === ',');   
    assert.deepEqual(test2, ["I've", 'been', 'to', 'Hollywood']);
  });
});