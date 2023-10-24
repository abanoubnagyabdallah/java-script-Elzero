// ***********************************************************
// ************ Assignment 1 *************
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice([myFriends.length - myFriends.length], num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice([myFriends.length - myFriends.length], num)); // ["Ahmed", "Elham", "Osama"];



// ************ Assignment 2 *************
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]


// ************ Assignment 3 *************
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


// ************ Assignment 4 *************
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - 1][0].slice(words.length - 1).toUpperCase()); // ZERO


// ************ Assignment 5 *************
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle)) {
    console.log("Found");
}
if (haystack[1] === needle) {
    console.log("Found");
}
if (haystack[haystack.length - 2] === needle) {
    console.log("Found");
}


// ************ Assignment 6 *************
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1,arr2).sort().slice(4).join("").toLowerCase()); // fxy