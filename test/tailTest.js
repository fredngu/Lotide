const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns ['lighthouse', 'labs'] for ['yo yo', 'lighthouse', 'labs']", () => {
    const words = tail(["yo yo", "lighthouse", "labs"]);
    assert.deepEqual(words, ["lighthouse", "labs"]);
  });
  it("returns [] for ['ok']", () => {
    const words2 = tail(["ok"]);
    assert.deepEqual(words2, []);
  });
  it("returns [] for []", () => {
    const empty = tail([]);
    assert.deepEqual(empty, []);
  });
});