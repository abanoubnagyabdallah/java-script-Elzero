// =================== one ================
// let promp = prompt(`Print Number From – To`);
// let afterSplit = promp.split("-").sort(); // [10,20]

// if (+afterSplit[0] <= +afterSplit[1]) {
//   for (let index = +afterSplit[0]; index <= +afterSplit[1]; index++) {
//     console.log(index);
//   }
// }

// =================== two ================
function popup() {
  let container = document.createElement("div");
  container.classList = "container";
  let headingTwo = document.createElement("h2");
  let headingTwoContent = document.createTextNode("Welcome");
  headingTwo.appendChild(headingTwoContent);
  let paragraph = document.createElement("p");
  let paragraphContent = document.createTextNode(
    "welcome to elzero web school"
  );
  paragraph.appendChild(paragraphContent);

  container.appendChild(headingTwo);
  container.appendChild(paragraph);

  document.body.appendChild(container);

  container.style.cssText =
    "background-color:#ccc; width:30%; margin:100px auto; padding:20px; text-align:center; position:relative; transition:0.5s";
  // close button
  let closeButton = document.createElement("button");
  let closeContent = document.createTextNode("X");
  closeButton.appendChild(closeContent);
  container.appendChild(closeButton);
  closeButton.style.cssText =
    "position:absolute; top:-10px; right:-10px; color:white; background-color:red; border:none; padding:10px; border-radius:50%";

  closeButton.onclick = () => {
    container.remove();
  };
}

setTimeout(popup, 2000);

// =================== three ================
let number = document.createElement("div");
number.appendChild(document.createTextNode("7"));
document.body.appendChild(number);

// let c = setInterval(() => {
//   number.innerHTML = number.innerHTML - 1;
//   if (number.innerHTML == 0) {
//     clearInterval(c);
//   }
// }, 1000);

// =================== four ================
// let c2 = setInterval(() => {
//   number.innerHTML = number.innerHTML - 1;
//   if (number.innerHTML == 0) {
//     location.href="https://google.com";
//   }
// }, 1000);


// =================== five ================
// let c = setInterval(() => {
//   number.innerHTML = number.innerHTML - 1;
//   if (number.innerHTML == 0) {
//     clearInterval(c);
//   }
//   if(number.innerHTML == 5){
//     window.open("https://google.com","_blank","width=400,height=400")
//   }
// }, 1000);