///// --- HEADER RESPONSE TO SCROLL (EXTRA FUNCTIONALLITY)


const navBar = document.querySelector(".nav-bar");
const navList = navBar.getElementsByTagName("li");
const anchor = navBar.getElementsByTagName("a");

const navListArray = Array.from(navList);
const anchorArray = Array.from(anchor);

document.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    navBar.style.backgroundColor = "inherit";
    navBar.style.justifyContent = "unset";
    navBar.style.borderBottom = "none";
    
    anchorArray.forEach((a) => {
      a.style.backgroundColor = "lightGrey";
    });
  } else {
    navBar.style.backgroundColor = "gray";
    navBar.style.justifyContent = "space-around";
    
    anchorArray.forEach((a) => {
      a.style.backgroundColor = "initial";
    });
  }
});
/////////// ------------------ /////////////////////////////


///// --- FOOTER DISPLAY
const paragraph = document.querySelector(".footer-info");

const codingLanguages = ["HTML", "CSS", "JavaScript"];
let message = "This page was built using: ";

for (let i = 0; i < codingLanguages.length; i++) {
  if (i == 0) {
    message = message + codingLanguages[i];
  } else if (i !== codingLanguages.length - 1) {
    message = message + ", " + codingLanguages[i];
  } else {
    message = message + " and " + codingLanguages[i];
  }
}
paragraph.innerText = message;



