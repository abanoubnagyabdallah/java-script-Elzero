// set
// window.localStorage.setItem("color","red");
// window.localStorage.setItem("color","blue");
// window.localStorage.fontSize="30px";
// window.localStorage["fontWeight"]="bold";

// let element=document.createElement("div");
// let content=document.createTextNode("hello world");

// element.appendChild(content);

// document.body.appendChild(element);

// element.style.color=localStorage["color"];

// console.log(typeof localStorage);

// remove
// window.localStorage.removeItem("color")
// window.localStorage.removeItem("fontSize")

// window.localStorage.clear()

// console.log(window.localStorage.key(1));

// ============== video 112 =============
// let lis = document.querySelectorAll("li");
// let exp = document.querySelector(".experiment");

// lis.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     lis.forEach((element) => {
//       element.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);

//     exp.style.backgroundColor = window.localStorage["color"];
//   });
// });

// window.onload=()=>{
//   exp.style.backgroundColor=window.localStorage["color"];

// }

// ============== video 113 =============
// let my_name = document.querySelector(".my__name");
// let my_name2 = document.querySelector(".my__name2");

// my_name.onblur = () => {
//   window.sessionStorage.setItem("value",my_name.value);
// };
// my_name2.onfocus=()=>{
//   my_name2.value=window.sessionStorage["value"];
// }

// ============== assignment 1 =============
let selectOne = document.querySelector("[name='selectOne']");
let selectTwo = document.querySelector("[name='selectTwo']");
let selectThree = document.querySelector("[name='selectThree']");
let my_div = document.querySelector(".my__div");
let familyOptions = document.querySelectorAll("[name='selectOne'] option");
let colorOptions = document.querySelectorAll("[name='selectTwo'] option");
let sizeOptions = document.querySelectorAll("[name='selectThree'] option");

// === font select box ===
selectOne.onchange = () => {
  localStorage.setItem("family", selectOne.value);
  my_div.style.fontFamily = localStorage.getItem("family");
};

// === color select box ===
selectTwo.onchange = () => {
  localStorage.setItem("color", selectTwo.value);
  my_div.style.backgroundColor = localStorage.getItem("color");
};

// === size select box ===
selectThree.onchange = () => {
  localStorage.setItem("size", selectThree.value);
  my_div.style.fontSize = localStorage.getItem("size");
};

// when reload page
window.onload = () => {
  if (localStorage["color"] == null) {
    my_div.style.backgroundColor = colorOptions[0].value;
  }
  if (localStorage["color"] != null){
    my_div.style.backgroundColor = localStorage.getItem("color");
  }
  if(localStorage["family"] == null){
    my_div.style.fontFamily = familyOptions[0].value;
  }
  if(localStorage["family"] != null){
    my_div.style.fontFamily = localStorage.getItem("family");
  }
  if(localStorage["size"]==null){
    my_div.style.fontSize=sizeOptions[0].value;
  }
  if(localStorage["size"]!=null){
    my_div.style.fontSize=localStorage.getItem("size")
  }
};
