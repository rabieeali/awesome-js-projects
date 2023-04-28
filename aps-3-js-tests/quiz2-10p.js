/*
Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]
*/


function makePair(str1, str2) {
  // Your code goes below this line
  return [str1, str2];
  // Your code goes above this line
}


// Don't modify code below this line.
assert(makePair(1, 2) === [1, 2]);
assert(makePair(21, 82) === [21, 82]);
assert(makePair(4213, 526) === [4213, 526]);

function assert(condition) {
  return console.log(condition ? "PASSED" : "FAILED");
}
// DON'T modify the code above this line