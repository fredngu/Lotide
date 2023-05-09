const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('Returns 1 count for ["Jason"] from firstNames and {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })', () => {
    assert.strictEqual(result["Jason"], 1);
  });
  it('Returns undefined for ["Karima"] (name not in array from firstNames) and {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })', () => {
    assert.strictEqual(result["Karima"], undefined);
  });
  it('Returns 2 counts for ["Fang"] from firstNames (multiple count) and {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })', () => {
    assert.strictEqual(result["Fang"], 2);
  });
  it('Returns 2 counts for ["Agouhanna"] from firstNames (Agouhanna is false) and {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })', () => {
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});