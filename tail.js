//Assert Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Tail Function
const tail = function(array) {
  return array.slice(1);
};

//Test
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test 2
const words = ["yo yo", "lighthouse", "labs"];
tail(words);
assertEqual(words.length, 3);

//Test 3
const words2 = tail(["ok"]);
assertEqual(words2.length, 0);
assertEqual(words2[0], undefined);

//Test 4
const empty = tail([]);
assertEqual(empty.length, 0);
assertEqual(empty[0], undefined);

