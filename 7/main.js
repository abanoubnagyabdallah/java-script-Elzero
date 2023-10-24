// ****************************************************************************** from 48 to 53 ***************************************************
// **************** Assignment 1 **************
console.log("**************** Assignment 1 **************");
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += 10) {
    if (i === exclude) {
        continue;
    }
    console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// **************** Assignment 2 **************
console.log("**************** Assignment 2 **************");
let start2 = 10;
let end2 = 0;
let stop = 3;
for (let i = start2; i >= end2; i--) {
    if (i === stop) {
        break;
    }
    if (i < start2) {
        console.log(`0${i}`);
    } else {
        console.log(i);
    }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// **************** Assignment 3 **************
console.log(" **************** Assignment 3 **************");
let start3 = 1;
let end3 = 6;
let breaker = 2;
for (let i = start3; i <= end3; i++) {
    console.log(i);
    for (let j = breaker; j < end3; j += 2) {
        console.log(`-- ${j}`);
    }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// **************** Assignment 4 **************
console.log(" **************** Assignment 4 **************");
let index = 10;
let jump = 2;

for (; ;) {
    console.log(index);
    index -= jump;
    if (index < 4) {
        break;
    }
}

// Output
// 10
// 8
// 6
// 4

// **************** Assignment 5 **************
console.log(" **************** Assignment 5 **************");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for (let i = 0; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
        continue;
    }
    console.log(`${i} => ${friends[i]}`);
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// **************** Assignment 6 **************
console.log(" **************** Assignment 6 **************");
let start6 = 0;
let swappedName = "elZerO";
let outString = [];
for (let i = start6; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        outString.push(swappedName[i].toLowerCase())
    }
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        outString.push(swappedName[i].toUpperCase())
    }
}
console.log(outString.join(""));
// Output
// "ELzERo"



// **************** Assignment 7 **************
console.log(" **************** Assignment 7 **************");
let s = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = s; i < mix.length; i++) {
    if(mix[i]===1){
        continue;
    }
    if (typeof mix[i] === "number") {
        console.log(mix[i]);
    }
}
// Output
// 2
// 3
// 4



// ****************************************************************************** from 54 to 56 ***************************************************
// **************** Assignment 1 **************
console.log(" **************** Assignment 1 **************");
let f = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let i = 0;
let counter = 0;
while(i<f.length){
    if(typeof f[i]!=="number" && !f[i].startsWith("A")){
        counter++;
        console.log(`${counter} => ${f[i]}`);
    }
    i++;
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"