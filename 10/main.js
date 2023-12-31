// **************** Assignment 1 **************
console.log(" **************** Assignment 1 **************");
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let redArray = mix
  .filter((element) => isNaN(parseInt(element)))
  .reduce((accumulate, current) => `${accumulate}${current}`);
console.log(redArray);
// Elzero

// **************** Assignment 2 **************
console.log(" **************** Assignment 2 **************");
let myString = "EElllzzzzzzzeroo";
let filterString = myString
  .split("")
  .filter((element, index, array) => element !== array[index + 1])
  .reduce((accumulate, current) => `${accumulate}${current}`);
console.log(filterString);
// Elzero

// **************** Assignment 3 **************
console.log(" **************** Assignment 3 **************");
let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log();
// Elzero

// **************** Assignment 4 **************
console.log(" **************** Assignment 4 **************");
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let ignoreChar = numsAndStrings
  .filter((element) => !isNaN(parseInt(element)))
  .map((element) => -element);
console.log(ignoreChar);
// [-1, -10, 10, 20, -5, -3]

// **************** Assignment 5 **************
console.log(" **************** Assignment 5 **************");
let nums = [2, 12, 11, 5, 10, 1, 99];
let reduceNumbers = nums.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return curr * acc;
  } else {
    return curr + acc;
  }
}, 1);
console.log(reduceNumbers);
// 500
