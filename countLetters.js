const countLetters = function(sentence) {
  let count = {};
  for (let letter of sentence) {
    if (count[letter]) {
      count[letter] += 1;
    } else if (letter !== " ") {
      count[letter] = 1;
    }
  }
  return count;
};

module.exports = countLetters;