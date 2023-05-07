const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;