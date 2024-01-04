// ====================== header ================================
let header = document.createElement("header");
let logo = document.createElement("a");
let logoContent = document.createTextNode("Abanoub");
let nav = document.createElement("ul");

// logo
logo.appendChild(logoContent);
logo.setAttribute("href", "#");
// navbar
function navbar(item) {
  for (let i = 1; i <= 1; i++) {
    let navItem = document.createElement("li");
    let link = document.createElement("a");
    let navContent = document.createTextNode(`${item}`);

    link.appendChild(navContent);
    link.setAttribute("href", "#");
    navItem.appendChild(link);
    nav.appendChild(navItem);
    // link in nav item styling
    link.style.cssText = "text-decoration:none; color:black;";
  }
}
navbar("home");
navbar("about");
navbar("services");
navbar("contact");

// append logo and navbar in header
header.appendChild(logo);
header.appendChild(nav);

// header styling
header.style.cssText =
  "display:flex; width:95%; margin:0px auto; justify-content:space-between; align-items:center ";
// nav styling
nav.style.cssText = "list-style:none; display:flex; gap:15px;";
// logo styling
logo.style.cssText =
  "text-decoration:none; color:green; font-size:20px; font-weight:bold;";

document.body.appendChild(header);
console.log(header);

// ========================== main section ===========================
let mainSection = document.createElement("section");
let container = document.createElement("div");

for (let i = 1; i <= 15; i++) {
  let box = document.createElement("div");
  let boxContent = document.createTextNode(`${i}`);
  box.appendChild(boxContent);
  container.appendChild(box);
  box.style.cssText =
    "background-color:white; text-align:center; padding:20px 0px";
}

// container styling
container.style.cssText =
  "display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:10px; padding:10px; background-color:#ccc; height:80vh;";

container.setAttribute("class", "container");
mainSection.appendChild(container);
document.body.appendChild(mainSection);

// ============================== footer =======================
let footer = document.createElement("footer");
let footerContent = document.createTextNode("copy right 2021");

footer.appendChild(footerContent);
document.body.appendChild(footer);

// footer styling
footer.style.cssText =
  "text-align:center; background-color:green; padding:20px 0px";
document.body.style.cssText = "padding:0px; margin:0px;";
