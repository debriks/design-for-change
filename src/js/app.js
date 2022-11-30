// HAMBURGER MENU ANIMATION

const btnHamburger = document.querySelector("#btnHamburger");

const header = document.querySelector(".header");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});

// STICKY NAVBAR

// let hero = document.querySelector(".hero");
// let nav = document.querySelector(".header");

// window.onscroll = function () {
//   if (window.pageYOffset > hero.offsetHeight - nav.offsetHeight) {
//     nav.classList.remove("bottom-nav");
//     nav.classList.add("top-nav");
//   }
// };

// ARROW LINKS ON HOVER

// const linkIcon = document.getElementById("linkIcon");

// function hover(linkIcon) {
//   linkIcon.setAttribute("src", "/images/red-arrow-hover.png");
// }

// function unhover(linkIcon) {
//   linkIcon.setAttribute("src", "/images/red-arrow.png");
// }
