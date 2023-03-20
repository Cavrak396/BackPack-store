//Dropdown menu

const button = document.querySelector(".js-drop-link");
const dropdown = document.querySelector(".js-dropdown");
const appear = "appear";

button.addEventListener("click", () => {
  dropdown.classList.toggle(appear);
});

//Hamburger menu

const hamburger = document.querySelector(".js-hamburger");
const navigation = document.querySelector(".js-nav");
const active = "active";

hamburger.addEventListener("click", () => {
  navigation.classList.toggle(active);
  hamburger.classList.toggle(active);
});

//Scroller to content

const bannerArrows = document.querySelector(".js-arrows");
const arrivalsSection = document.querySelector(".js-arrivals");

bannerArrows.addEventListener("click", () => {
  arrivalsSection.scrollIntoView({ behavior: "smooth" });
});

//Scroller to sections

const navLinks = document.querySelectorAll(".js-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (element) => {
    element.preventDefault();
    const targetPath = link.getAttribute("href");
    const targetSection = document.querySelector(targetPath);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
