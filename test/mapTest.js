const assert = require('chai').assert;
const map = require('../map');

//Test
const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("Returns ['g', 'c', 't', 'm', 't'], which are first letter in each element of the array", () => {
    const test1 = map(words, word => word[0]);
    assert.deepEqual(test1, ['g', 'c', 't', 'm', 't']);
  });
  it("Returns ['day', 'lay', 'oay', 'ray', 'may'] which adds 'ay' to the last letter of each element", () => {
    const test2 = map(words, word => word.slice(-1) + 'ay');
    assert.deepEqual(test2, ['day', 'lay', 'oay', 'ray', 'may']);
  });
  it("Returns ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom'], which is repeating each element in the array", () => {
    const test3 = map(words, word => word + word);
    assert.deepEqual(test3, ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom']);
  });
  it("Returns ['G', 'C', 'T', 'M', 'T'], which is the first letter of each element and makes it uppercase", () => {
    const test4 = map(words, word => word[0].toUpperCase());
    assert.deepEqual(test4, ['G', 'C', 'T', 'M', 'T']);
  });
});