const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

//hide style-switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

/* ====================== theme colors ====================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* ====================== theme light and dark mode ====================== */
const dayNight = document.querySelector(".day-night");
const spinIcon = document.querySelector(".style-switcher-toggler");
const spinI = spinIcon.querySelector("i");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    var logo = document.querySelector(".logo");
    var logoIcon = logo.querySelector(".logo-icon");
    logoIcon.setAttribute("src", "images/dark-logo.png");
  } else {
    var logo = document.querySelector(".logo");
    var logoIcon = logo.querySelector(".logo-icon");
    logoIcon.setAttribute("src", "images/light-logo.png");
  }
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    spinI.classList.add("white-color");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
