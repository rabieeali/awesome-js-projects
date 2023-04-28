/*
Return a String as an Integer
Create a function that takes a string and returns it as an integer.

Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12
Notes
All numbers will be whole.
All numbers will be positive.
*/


function stringInt(str) {
  // Your code goes below this line

  return +str

  // Your code goes above this line
}


// Don't modify code below this line.
assert(stringInt("6") === 6);
assert(stringInt("2") === 2);
assert(stringInt("10") === 10);
assert(stringInt("666") === 666);

function assert(condition) {
  return console.log(condition ? "PASSED" : "FAILED");
}
// DON'T modify the code above this line