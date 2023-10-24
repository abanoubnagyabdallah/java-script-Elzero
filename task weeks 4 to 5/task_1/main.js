// *******************///  Assignment 1 ///*********************
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10 ** 5); // 100000
console.log(100000.000); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(1e5); // 100000
console.log((2e5) / 2); // 100000
console.log(Number("100000")); // 100000
let num = "0";
console.log(Number(1 + num.repeat(5))); // 100000
console.log(parseInt(1 + num.repeat(5))); // 100000
console.log(Number(false + true + num.repeat(5))); // 100000
console.log(parseInt("100000")); // 100000


// *******************///  Assignment 2 ///*********************
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


// *******************///  Assignment 3 ///*********************
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

// *******************///  Assignment 4 ///*********************
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// *******************///  Assignment 5 ///*********************
let num2 = 10;

console.log(Number.isInteger(num2) + Number.isInteger(num2)); // 2

// *******************///  Assignment 6 ///*********************
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10

// *******************///  Assignment 7 ///*********************
console.log(parseInt(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4