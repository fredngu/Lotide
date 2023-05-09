//Function - flatten: removes inner arays in array 
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

module.exports = flatten;