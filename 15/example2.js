let input_one = document.querySelector(".one");
let input_two = document.querySelector(".two");
let input_three = document.querySelector(".three");
let select = document.querySelector("select");

document.forms[0].onsubmit = () => {
  sessionStorage.setItem("valueOne", input_one.value);
  sessionStorage.setItem("valueTwo", input_two.value);
  sessionStorage.setItem("valueThree", input_three.value);
  sessionStorage.setItem("select", select.value);
};

window.onload = () => {
  input_one.value = sessionStorage.getItem("valueOne");
  input_two.value = sessionStorage.getItem("valueTwo");
  input_three.value = sessionStorage.getItem("valueThree");
  select.value = sessionStorage.getItem("select");
};
