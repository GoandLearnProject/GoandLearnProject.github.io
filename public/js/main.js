let bodyTag = document.body;
let themeColor = localStorage.getItem("webMode");
let gD1 = document.querySelectorAll("g.d1");
let gD2 = document.querySelectorAll("g.d2");

document.addEventListener("DOMContentLoaded", function () {
  if (!bodyTag.className.includes(themeColor)) {
    bodyTag.classList.remove("drK");
    bodyTag.className += " lgT";
    gD2.forEach((elm) => {
      elm.style.display = "";
    });
  }
});

// function darkMode() {
//   if (bodyTag.className.includes("drK")) {
//     gD2.forEach((elm) => {
//       elm.style.display = "none";
//     });
//     bodyTag.classList.remove("drK");
//     bodyTag.className += " lgT";
//     localStorage.setItem("webMode", "lgT");
//     gD1.forEach((elm) => {
//       elm.style = "";
//     });
//   } else {
//     gD1.forEach((elm) => {
//       elm.style.display = "none";
//     });
//     bodyTag.classList.remove("lgT");
//     bodyTag.className += " drK";
//     localStorage.setItem("webMode", "drK");
//     gD2.forEach((elm) => {
//       elm.style = "";
//     });
//   }
// }
