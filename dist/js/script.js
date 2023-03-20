//Dropdown menu

const button = document.querySelector(".header__navigation-link--drop");
const dropdown = document.querySelector(".header__dropdown");

button.addEventListener("click", () => {
  let active = "appear";
  dropdown.classList.toggle(active);
});

//Hamburger menu

const hamburger = document.querySelector(".header__hamburger");
const navigation = document.querySelector(".header__navigation");
const navigationLink = document.querySelectorAll(".header__navigation-link");
const active = "active";

hamburger.addEventListener("click", () => {
  navigation.classList.toggle(active);
  hamburger.classList.toggle(active);
})


//Scroller to content

const bannerArrows = document.querySelector(".banner__arrows");
const arrivalsSection = document.querySelector(".arrivals");

bannerArrows.addEventListener("click", () => {
  arrivalsSection.scrollIntoView({ behavior: "smooth" });
});

//Scroller to sections

const navLinks = document.querySelectorAll(".header__navigation-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (element) => {
    element.preventDefault();

    let targetPath = link.getAttribute("href");
    let targetSection = document.querySelector(targetPath);

    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
