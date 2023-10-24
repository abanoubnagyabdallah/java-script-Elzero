// **************** Assignment 1 **************
console.log(" **************** Assignment 1 **************");
function sayHello(theName, theGender) {
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    }
    if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    }
    if (theGender !== "Female" && theGender !== "Male") {
        console.log(`Hello ${theName}`);
    }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"



// **************** Assignment 2 **************
console.log(" **************** Assignment 2 **************");
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
        console.log("Second Number Not Found");
    }
    if (operation === 'add') {
        console.log(firstNum + secondNum);
    }
    if (operation === 'subtract') {
        console.log(firstNum - secondNum);
    }
    if (operation === 'multiply') {
        console.log(firstNum * secondNum);
    }
    if (operation === undefined) {
        console.log(firstNum + secondNum);
    }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600



// **************** Assignment 3 **************
console.log(" **************** Assignment 3 **************");
function ageInTime(theAge) {
    if (theAge >= 100 || theAge <= 10) {
        console.log("Age Out Of Range");
    }
    else {
        console.log(`Months Example => ${theAge * 12} Months`);
        console.log(`Weeks Example => ${theAge * 12 * 4} Weeks`);
        console.log(`Days Example => ${theAge * 12 * 30} Days`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


// **************** Assignment 4 **************
console.log(" **************** Assignment 4 **************");
function checkStatus(a, b, c) {
    typeof a === "string" && typeof b === "number" && typeof c === "boolean" && c === true ? console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`) :
        typeof a === "string" && typeof b === "number" && typeof c === "boolean" && c === false ? console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`) :

            typeof b === "string" && typeof a === "number" && typeof c === "boolean" && c === true ? console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`) :
                typeof b === "string" && typeof a === "number" && typeof c === "boolean" && c === false ? console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`) :

                    typeof c === "string" && typeof b === "number" && typeof a === "boolean" && a === true ? console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`) :
                        typeof c === "string" && typeof b === "number" && typeof a === "boolean" && a === false ? console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`) :

                            typeof c === "string" && typeof a === "number" && typeof b === "boolean" && b === true ? console.log(`Hello ${c}, Your Age Is ${a}, You Are Available For Hire`) :
                                typeof c === "string" && typeof a === "number" && typeof b === "boolean" && b === false ? console.log(`Hello ${c}, Your Age Is ${a}, You Are Not Available For Hire`) :

                                    typeof a === "string" && typeof c === "number" && typeof b === "boolean" && b === true ? console.log(`Hello ${a}, Your Age Is ${c}, You Are Available For Hire`) :
                                        typeof a === "string" && typeof c === "number" && typeof b === "boolean" && b === false ? console.log(`Hello ${a}, Your Age Is ${c}, You Are Not Available For Hire`) :

                                            typeof b === "string" && typeof c === "number" && typeof a === "boolean" && a === true ? console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`) :
                                                typeof b === "string" && typeof c === "number" && typeof a === "boolean" && a === false ? console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`) :

                                                    console.log("invalid");
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus("Osama", 38, false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"




// **************** Assignment 5 **************
console.log(" **************** Assignment 5 **************");
function createSelectBox(startYear, endYear) {
    console.log(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        console.log(`  <option value="${i}">${i}</option>`);
    }
    console.log(`</select>`);
}
createSelectBox(2000, 2021);
/*
<select>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
</select>
*/


// **************** Assignment 6 **************
console.log(" **************** Assignment 6 **************");
function multiply(...numbers) {
    let mul = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "string") {
            continue;
        }
        mul *= Math.trunc(numbers[i]);
    }
    console.log(mul);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

