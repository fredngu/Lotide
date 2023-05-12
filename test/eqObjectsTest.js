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
  it("Returns false since the second object is a different length", () => {
    const test5 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { b: 2, a: { y: 0, z: 1 }});
    assert.strictEqual(test5, true);
  });
  it("Returns false since the object values for the key 'a' is a different length", () => {
    const test6 = eqObjects({ b: 2, a: { y: 0, z: 1 }}, { a: { z: 1 }, b: 2 });
    assert.strictEqual(test6, false);
  });
  it("Returns false since value for 'a' is an object in only the first object", () => {
    const test7 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
    assert.strictEqual(test7, false);
  });
  it("Returns false since value for 'a' is array versus a non-array object", () => {
    const test8 = eqObjects({ a: [2, 4, 3], b: 2 }, { a: { y: 0, z: 1 }, b: 2});
    assert.strictEqual(test8, false);
  });
});
