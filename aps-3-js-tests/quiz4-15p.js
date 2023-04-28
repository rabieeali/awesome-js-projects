/*
Convert a Number to Base-2
Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

Examples
binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10
Notes
Numbers will always be below 1024 (not including 1024).
The && operator could be useful.
The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
If a binary conversion for 0 is attempted, return "0".
*/


function binary(integer) {
  // Your code goes below this line
  if (integer === 0) return "0"
  let binryStr = "";
  while (integer > 0) {
    binryStr = (integer % 2) + binryStr;
    integer = Math.floor(integer / 2);
  }
  return binryStr;

  // Your code goes above this line
}


// Don't modify code below this line.
assert(binary(100) === "1100100");
assert(binary(1) === "1");
assert(binary(0) === "0");
assert(binary(69) === "1000101");
assert(binary(1023) === "1111111111");
assert(binary(511) === "111111111");
assert(binary(666) === "1010011010");
assert(binary(123) === "1111011");

function assert(condition) {
 return console.log(condition ? "PASSED" : "FAILED"); 
}
// DON'T modify the code above this line