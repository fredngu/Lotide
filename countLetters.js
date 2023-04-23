const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let count = {}
  
  for (letter of sentence) {
    if (count[letter]) {
      count[letter] += 1;
    } else if (letter !== " ") {
      count[letter] = 1;
    }
  }
  return count;
}

const result1 = countLetters("lighthouse in the house")
assertEqual(result1["e"], 3);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["n"], 1);