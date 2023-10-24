// from 27 to 30

// *******************///  Assignment 1 ///*********************
let userName = "Elzero";
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName[userName.length - userName.length].toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName[0].toLocaleLowerCase().repeat(3)); // eee


// *******************///  Assignment 2 ///*********************
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word[0] === letterE.toLocaleUpperCase()); // True
console.log(word[word.length - 1] === letterO.toLocaleLowerCase()); // True