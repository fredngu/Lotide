const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keys of Object.keys(object1)) {
      if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
        if (eqArrays(object1[keys], object2[keys]) !== true) {
          return false;
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const geometric = {color: "orange", shape: "square"};
const geometric2 = {shape: "square", color: "orange"}
const geometric3 = {color: "black", shape: "triangle"}

assertObjectsEqual(geometric, geometric2);
assertObjectsEqual(geometric3, geometric);

assertEqual(eqObjects(geometric, geometric2), true);
assertEqual(eqObjects(geometric3, geometric), false);