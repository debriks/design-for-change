// HAMBURGER MENU ANIMATION

const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const nav = document.querySelector(".header__subnav");
const rule = document.querySelector(".header__rule");

btnHamburger.addEventListener("click", function () {
  if (!header.classList.contains("open")) {
    header.classList.add("open");
    nav.classList.add("visible");
    rule.classList.add("open");
  } else {
    header.classList.remove("open");
    nav.classList.remove("visible");
    rule.classList.remove("open");
  }
});

// PROJECTS PAGE OVERLAYS

const btnOverlay1 = document.getElementById("btnOverlay1");
const overlay1 = document.querySelector(".overlay-1");

const btnOverlay2 = document.getElementById("btnOverlay2");
const overlay2 = document.querySelector(".overlay-2");

const btnOverlay3 = document.getElementById("btnOverlay3");
const btnOverlay4 = document.getElementById("btnOverlay4");
const btnOverlay5 = document.getElementById("btnOverlay5");
const btnOverlay6 = document.getElementById("btnOverlay6");
const btnOverlay7 = document.getElementById("btnOverlay7");
const btnOverlay8 = document.getElementById("btnOverlay8");
const btnOverlay9 = document.getElementById("btnOverlay9");

const btnOverlayClose = document.querySelectorAll(".btn-close-overlay");

btnOverlay1.addEventListener("click", function () {
  overlay1.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay2.addEventListener("click", function () {
  overlay2.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay3.addEventListener("click", function () {
  overlay1.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay4.addEventListener("click", function () {
  overlay2.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay5.addEventListener("click", function () {
  overlay1.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay6.addEventListener("click", function () {
  overlay2.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay7.addEventListener("click", function () {
  overlay1.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay8.addEventListener("click", function () {
  overlay2.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlay9.addEventListener("click", function () {
  overlay1.classList.add("visible");
  window.scrollTo(0, 0);
});

btnOverlayClose.forEach((button) => {
  button.addEventListener("click", () => {
    overlay1.classList.remove("visible");
    overlay2.classList.remove("visible");
  });
});

// SWIPER

const swiper = new Swiper(".mySwiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
