// ***************  1  ****************
// Test Case 1
let num1 = 9; // "009"
if (num1 < 10) {
    console.log(`00${num1}`);
}

// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) {
    console.log(`0${num2}`);
}

// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) {
    console.log(`${num3}`);
}




// *************** 2 ******************
let number = 9;
let str = "9";
let str2 = "20";

if (number == str) {
    console.log(`${number} Is The Same Value As ${str}`);
}
if (number === str) {
    console.log(`${number} Is The Same Value As ${str} But Not The Same Type`);
}
if (number != str2) {
    console.log(`${number} Is Not The Same Value Or The Same Type As ${str2}`);
}
if (str !== str2) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}
// Output
// "{number} Is The Same Value As {str}"
// "{number} Is The Same Value As {str} But Not The Same Type"
// "{number} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"




// **************** 3 *******************
let numOne = 10;
let numTwo = 30;
let numThree = "30";

if (numThree > numOne && numThree !== numTwo) {
    console.log(`${numThree} Is Larger Than ${numOne} And Type string Not The Same Type As number`);
}
if (numThree > numOne && numThree == numTwo) {
    console.log(`${numThree} Is Larger Than ${numOne} And Value Is The Same As ${numTwo} And Type string Not The Same Type As number`);
}
if (numThree !== numOne && numThree !== numTwo) {
    console.log(`${numThree} Value And Type Is Not The Same As ${numOne} And Type Is Not The Same As ${numTwo}`);
}
// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"



// **************** 4 *******************
// Edit What You Want Here

let num_1 = 10;
let num_2 = 10;
let num_3 = "10";
let num_4 = 20;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (num_1 === num_2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num_1 === num_2 && num_1 < num_4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num_1 === num_2 && num_1 == num_3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num_1 + num_2) === num_4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num_1 + num_3) !== num_4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num_1 + num_2 + num_3) !== num_4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num_4 - (num_1 + num_3) + num_2 != 21) {
    console.log("True");
} else {
    console.log("False");
}