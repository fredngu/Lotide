//Function - without: returns array removing elements that match those in the second array
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
};

module.exports = without;