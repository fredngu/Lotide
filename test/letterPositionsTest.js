const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const letters = letterPositions("hello");

describe("#letterPositions", () => {
  it("Returns [0] position for letter 'h'", () => {
    assert.deepEqual(letters.h, [0]);
  });
  it("Returns [1] position for letter 'e'", () => {
    assert.deepEqual(letters.e, [1]);
  });
  it("Returns [2, 3] position for letter 'l'", () => {
    assert.deepEqual(letters.l, [2, 3]);
  });
  it("Returns [4] position for letter 'o'", () => {
    assert.deepEqual(letters.o, [4]);
  });
});
