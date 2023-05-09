const assert = require('chai').assert;
const findKey = require('../findKey');

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('#findKey', () => {
  it("Return 'noma' key from stars object using callback function x.stars === 2", () => {
    const test1 = findKey(stars, x => x.stars === 2);
    assert.strictEqual(test1, 'noma');
  });
  it("Return 'Blue Hill' key from stars object using callback function x.stars === 1", () => {
    const test2 = findKey(stars, x => x.stars === 1);
    assert.strictEqual(test2, 'Blue Hill');
  });
  it("Return undefined from stars object using callback function x.stars === 4", () => {
    const test3 = findKey(stars, x => x.stars === 4);
    assert.strictEqual(test3, undefined);
  });
});