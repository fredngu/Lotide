const eqArrays = require('./eqArrays');

//Function - eqObjects: checks if both objects are equal
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const keys of Object.keys(object1)) {
      if (Array.isArray(object1[keys] && Array.isArray(object2[keys]))) {
        if (eqArrays(object1[keys], object2[keys]) !== true) {
          return false;
        }
      } else if (!Array.isArray(object1[keys]) || !Array.isArray(object2[keys])) {
        if (typeof object1[keys] === 'object' && typeof object2[keys] === 'object') {
          return eqObjects(object1[keys], object2[keys]);
        } else {
          if (object1[keys] !== object2[keys]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;