/*
Filter out Strings from an Array
Create a function that takes an array of non-negative integers and strings 
and return a new array without the strings.

Examples
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
Notes
Zero is a non-negative integer.
The given array only has integers and strings.
Numbers in the array should not repeat.
The original order must be maintained.
*/


function filterArray(array) {
  // Your code goes below this line
  const typeIsOk = array.every(item => typeof item === "string" || typeof item === "number");
  if (!typeIsOk) return 'all items should be either string or number'
  const filteredArr = array.filter((item) => typeof item === "number" && item >= 0);
  const filteredUniqueArr = [...new Set(filteredArr)]
  return filteredUniqueArr
  // Your code goes above this line
}

// Don't modify code below this line.
assert(filterArray([1, 2, "a", "b"]) === [1, 2]);
assert(filterArray([1, "a", "b", 0, 15]) === [1, 0, 15]);
assert(filterArray([1, 2, "aasf", "1", "123", 123]) === [1, 2, 123]);
assert(filterArray(["jsyt", 4, "yt", 6]) === [4, 6]);
assert(filterArray(["r", 5, "y", "e", 8, 9]) === [5, 8, 9]);
assert(filterArray(["a", "e", "i", "o", "u"]) === []);
assert(filterArray([4, "z", "f", 5]) === [4, 5]);
assert(filterArray(["abc", 123]) === [123]);
assert(filterArray(["$%^", 567, "&&&"]) === [567]);
assert(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]) === [43, 76, 88]);

function assert(condition) {
  return console.log(condition ? "PASSED" : "FAILED");
}
// DON'T modify the code above this line