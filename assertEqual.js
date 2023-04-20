//Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    return console.log("🛑🛑🛑 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

//Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lotide", "Lotide");
assertEqual(7239, 1231);
assertEqual(1, 1);
