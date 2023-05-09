//Function - takeUntil: Retrieves elements of an array until the callback function is fulfilled
const takeUntil = function(array, callback) {
  let takenArray = []
  for (item of array) {
    if (callback(item)) {
      return takenArray;
    } else {
      takenArray.push(item);
    }
  }
  return takenArray;
};

module.exports = takeUntil;