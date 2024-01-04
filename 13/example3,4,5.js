// =============================== example 3 ======================
// remove paragraph
let paragraph = document.querySelector("p");
paragraph.remove();

let element = document.querySelector(".our-element");

// create pre element
let preDiv = document.createElement("div");
let div1__Content = document.createTextNode("Start");
preDiv.append(div1__Content);
preDiv.classList.add("start");
preDiv.setAttribute("title", "Start Element");
preDiv.setAttribute("data-value", "Start");
element.prepend(preDiv);

// create post element
let postDiv = document.createElement("div");
let div2__Content = document.createTextNode("End");
postDiv.append(div2__Content);
postDiv.classList.add("end");
postDiv.setAttribute("title", "End Element");
postDiv.setAttribute("data-value", "End");
element.append(postDiv);

// =============================== example 4 ======================
let elzero = document.querySelector(".elzero");
console.log(elzero.lastChild.textContent.trim());

// =============================== example 5 ======================
let Element = document.querySelectorAll(".type");
Element.forEach((element)=>{
    element.onclick=()=>{
        console.log(element.nodeName);
    }
});
