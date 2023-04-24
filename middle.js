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

const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  }
  for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
    if (array[i] === array[j]) {
      middleArray.push(array[i]);
    } else if ((array[i] + 1) === array[j]) {
      middleArray.push(array[i], array[j]);
    }
  }
  return middleArray; 
}

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3] 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]