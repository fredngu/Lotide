const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');

//Function - assertObjectsEqual: shows if both objects are equal or not using eqObjects
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const geometric = {color: "orange", shape: "square"};
const geometric2 = {shape: "square", color: "orange"}
const geometric3 = {color: "black", shape: "triangle"}

assertObjectsEqual(geometric, geometric2);
assertObjectsEqual(geometric3, geometric);

assertEqual(eqObjects(geometric, geometric2), true);
assertEqual(eqObjects(geometric3, geometric), false);