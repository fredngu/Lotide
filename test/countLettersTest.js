const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 3 counts of ['e'] for 'lighthouse in the house' ", () => {
    const test1 = countLetters('lighthouse in the house');
    assert.strictEqual(test1["e"], 3);
  });
  it("returns 4 counts of ['h'] for 'lighthouse in the house' ", () => {
    const test2 = countLetters('lighthouse in the house');
    assert.strictEqual(test2["h"], 4);
  });
  it("returns 2 counts of ['t'] for 'lighthouse in the house' ", () => {
    const test3 = countLetters('lighthouse in the house');
    assert.strictEqual(test3["t"], 2);
  });
  it("returns 1 counts of ['n'] for 'lighthouse in the house' ", () => {
    const test4 = countLetters('lighthouse in the house');
    assert.strictEqual(test4["n"], 1);
  });
});

