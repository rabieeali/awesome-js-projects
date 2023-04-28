/**
Reversible Inclusive List Ranges
Write a function that, given the start and end values, returns an array containing all the numbers inclusive to that range. See examples below.

Examples
reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]

reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]
Notes
The sort order of the resulting array is dependent of the input values.
All inputs provided in the test scenarios are valid.
If start is greater than end, return a descendingly sorted array, otherwise, ascendingly sorted.
A recursive version of this challenge can be found here.
*/


function reversibleInclusiveList (num1, num2) {
  // Your code goes below this line

  let result = [];
  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      result.push(i);
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      result.push(i);
    }
  }
  return result;
  
  // Your code goes above this line
}


// Don't modify code below this line.
let [actualParam, expectedParam] = [
  [
    [5, 1],
    [6, 2],
    [10, 20],
    [24, 17],
    [40, 50],
    [51, 41],
    [11, 66],
    [9, 3],
    [6, 16],
  ],
  [
    [5, 4, 3, 2, 1],
    [6, 5, 4, 3, 2],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [24, 23, 22, 21, 20, 19, 18, 17],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41],
    [
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
      49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
    ],
    [9, 8, 7, 6, 5, 4, 3],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  ],
];
for (let i in actualParam) assert(reversibleInclusiveList(...actualParam[i]) === expectedParam[i]);

function assert(condition) {
  return console.log(condition ? "PASSED" : "FAILED");
}
// DON'T modify the code above this line