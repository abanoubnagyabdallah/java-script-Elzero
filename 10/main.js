// **************** Assignment 1 **************
console.log(" **************** Assignment 1 **************");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let redArray = mix.filter((element) => isNaN(parseInt(element))).reduce((accumulate, current) => `${accumulate}${current}`)
console.log(redArray);
// Elzero



// **************** Assignment 2 **************
console.log(" **************** Assignment 2 **************");
let myString = "EElllzzzzzzzeroo";
let filterString = myString.split("").filter((element, index, array) => element !== array[index + 1]).reduce((accumulate, current) => `${accumulate}${current}`)
console.log(filterString);
// Elzero



// **************** Assignment 3 **************
console.log(" **************** Assignment 3 **************");
let myArray = ["E", "l", "z", ["e", "r"], "o"];
console.log(myArray);
// Elzero