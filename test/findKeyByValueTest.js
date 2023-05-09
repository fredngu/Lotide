const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("Returns 'drama' from bestTVShowsByGenra object and show 'The Wire'", () => {
    const test1 = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(test1, "drama");
  });
  it("Returns undefined from bestTVShowsByGenra object and show 'That '70s Show'", () => {
    const test2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.strictEqual(test2, undefined);
  });
  it("Returns 'comedy' from bestTVShowsByGenra object and show 'Brooklyn Nine- Nine'", () => {
    const test3 = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
    assert.strictEqual(test3, 'comedy');
  });
});
