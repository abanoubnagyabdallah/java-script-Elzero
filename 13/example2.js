let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let current = document.querySelector(".display");

// add input
addInput.onblur = () => {
  let finalResult = addInput.value;
  let AfterSplit = finalResult.split(" ");
  for (let i = 0; i < AfterSplit.length; i++) {
    let element = document.createElement("div");
    let content = document.createTextNode(`${AfterSplit[i]}`);
    element.classList.add("box");
    element.appendChild(content);

    if (AfterSplit != "") {
      current.appendChild(element);
    }
  }
  window.localStorage.setItem("value", current.textContent.trim().split(" "));
};
addInput.onfocus = () => {
  addInput.value = localStorage.getItem("value");
};

// remove input
removeInput.onblur = () => {
  let allElements = document.querySelectorAll(".box");
  let removedValue = removeInput.value.split(" ");

  isEmpty();
  for (let i = 0; i < allElements.length; i++) {
    allElements.forEach((e) => {
      if (removedValue[i] == e.textContent) {
        e.remove();
      }
    });
  }
};

function isEmpty() {
  if (current.children.length <= 0) {
    console.log("No Classes To Show");
  }
}
