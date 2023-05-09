//Function - findKey: Finds the key if it's value matches the callback function
const findKey = function(object, callback) {
  for (let keys of Object.keys(object)) {
    if (callback(object[keys]) === true) {
      return keys;
    }
  }
};

module.exports = findKey;