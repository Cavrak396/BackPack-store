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

hamburger.addEventListener("click", () => {
  let active = "active";
  navigation.classList.toggle(active);
});

//Scroller to content

const bannerArrows = document.querySelector('.banner__arrows');
const arrivalsSection = document.querySelector('.arrivals');

bannerArrows.addEventListener('click', () => {
  arrivalsSection.scrollIntoView({ behavior: 'smooth' });
});