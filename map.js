const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect; 
  if (eqArrays(array1, array2)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
  }
};

const results1 = map(words, word => word[0]);

const results2 = map(words, word => word.slice(-1) + 'ay');

const results3 = map(words, word => word + word);

const results4 = map(words, word => word[0].toUpperCase());

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['day', 'lay', 'oay', 'ray', 'may']);
assertArraysEqual(results3, ['groundground', 'controlcontrol', 'toto', 'majormajor', 'tomtom']);
assertArraysEqual(results4, ['G', 'C', 'T', 'M', 'T']);
