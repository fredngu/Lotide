//Function - findKeyByValue: returns key when given a value
const findKeyByValue = function(object, valueName) {
  for (let keys of Object.keys(object)) {
    if (object[keys] === valueName) {
      return keys;
    }
  }
};

module.exports = findKeyByValue;