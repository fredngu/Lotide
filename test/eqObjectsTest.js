const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};
const longSleeveShirtObjects = { size: "medium", color: "red", sleeveLength: "long"};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  it("Returns true since both objects key:pairs are the same", () => {
    const test1 = eqObjects(shirtObject, anotherShirtObject);
    assert.strictEqual(test1, true);
  });
  it("Returns false since the second object is longer in length", () => {
    const test2 = eqObjects(shirtObject, longSleeveShirtObjects);
    assert.strictEqual(test2, false);
  });
  it("Returns true since the both objects key:pairs are the same, even with the array.", () => {
    const test3 = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);
    assert.strictEqual(test3, true);
  });
  it("Returns false since the second object is a different length", () => {
    const test4 = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
    assert.strictEqual(test4, false);
  });
});