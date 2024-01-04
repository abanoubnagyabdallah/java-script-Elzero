// ************ Assignment 1 **************
console.log("************ Assignment 1 **************");
let Element1 = document.querySelector(".element");
let Element2 = document.querySelector("div");
let Element3 = document.querySelector("#elzero");
let Element4 = document.querySelector("[name='js']");

let Element5 = document.querySelectorAll(".element")[0];
let Element6 = document.querySelectorAll("div")[0];
let Element7 = document.querySelectorAll("#elzero")[0];
let Element8 = document.querySelectorAll("[name='js']")[0];

let Element9 = document.getElementById("elzero");
let Element10 = document.getElementsByClassName("element")[0];
let Element11 = document.getElementsByTagName("div")[0];

let Element12 = document.body.children[0];
let Element13 = document.body.childNodes[1];
// let Element14 = document.body.firstChild;
let Element15 = document.body.firstElementChild;

console.log(
  Element1,
  Element2,
  Element3,
  Element4,
  Element5,
  Element6,
  Element7,
  Element8,
  Element9,
  Element10,
  Element11,
  Element12,
  Element13,
  // Element14,
  Element15
);

// ************ Assignment 2 **************
console.log("************ Assignment 2 **************");

let images = document.querySelectorAll("[decoding='async']");
let loopImages = images.forEach((element) => {
  element.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  element.setAttribute("alt", "Elzero Logo");
});

for (let i = 0; i < images.length; i++) {
  console.log(images[i]);
}

// ************ Assignment 3 **************
// console.log("************ Assignment 3 **************");
// // {0} USD Dollar = {0} Egyptian Pound
// let byDollar = document.querySelector("[name='dollar']");
// let result = document.querySelector(".result");

// document.forms[0].oninput = () => {
//   result.textContent = `{${byDollar.value}} USD Dollar = {${(
//     byDollar.value * 40.6
//   ).toFixed(2)}} Egyptian Pound`;
// };

// ************ Assignment 4 **************
console.log("************ Assignment 4 **************");
let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let divLen = document.querySelectorAll(".len");
let divTemporary;

// swap div one and div two content
divTemporary = divOne.textContent;
divOne.textContent = divTwo.textContent;
divTwo.textContent = `${divTemporary} ${divLen.length}`;

// title attribute
divOne.setAttribute("title", "one");
divTwo.setAttribute("title", "two");

// ************ Assignment 5 **************
console.log("************ Assignment 5 **************");
let imageAlt = document.querySelectorAll("[decoding='async2']");

imageAlt.forEach((element) => {
  if (element.hasAttribute("alt")) {
    element.setAttribute("alt", "old");
  } else if (!element.hasAttribute("alt")) {
    element.setAttribute("alt", "Elzero New");
  }
});

for (let i = 0; i < imageAlt.length; i++) {
  console.log(imageAlt[i]);
}

// ************ Assignment 6 **************
console.log("************ Assignment 6 **************");
let elementsNumber = document.querySelector("[type='number']");
let elementsContent = document.querySelector("[type='text']");
let select = document.querySelector("select");
let btn = document.querySelector("[value= 'Create']");
let results = document.querySelector(".results");

btn.onclick = (e) => {
  e.preventDefault();
  results.innerHTML="";
  for (let index = 1; index <= elementsNumber.value; index++) {
    results.innerHTML+=`<${select.value} class="box" title="Element" id="id-${index}">${elementsContent.value}</${select.value}>`;
  }
};
