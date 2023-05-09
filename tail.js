const assertEqual = require('./assertEqual');

//Function - tail: Returns all elements of an array besides the first
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;
