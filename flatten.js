const eqArrays = (array1, array2) => {
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

const flatten = (array) => {
  let finalArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const item of element) {
        finalArray.push(item);
      }
    } else {
      finalArray.push(element);
    }
  }
  return finalArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([21, [16, 34, 20], 92, 83, [42, 54, 13, 34]]), [21, 16, 34, 20, 92, 83, 42, 54, 13, 34]);