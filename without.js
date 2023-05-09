const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
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

const without = (source, itemsToRemove) => {
  let arr = []
  for (item of source) {
    arr.push(item);
  }
  let i = 0
  while (i < arr.length) {
    for (items of itemsToRemove) {
        if (arr[i] === items) {
          arr.splice([i], 1);
        }
      } 
      i++;
    }
  return arr;
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);// => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(words);
let test = eqArrays(words, ["hello", "world", "lighthouse"]);
console.log(words.length)
