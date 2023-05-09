const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;