const toggle = document.querySelector("#toggler");
const navigation = document.querySelector("#header");
const dropdownLink1 = document.querySelector(".dropdown-nav-link1");
const dropdownLink2 = document.querySelector(".dropdown-nav-link2");
const dropdownList1 = document.querySelector(".dropdown1");
const dropdownList2 = document.querySelector(".dropdown2");
const arrow1 = document.querySelector(".arrow1");
const body = document.querySelector("main");
const hero = document.querySelector(".hero");

toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  if (navigation.classList.contains("active")) {
    toggle.setAttribute("src", "/images/icon-close-menu.svg");
  } else {
    toggle.setAttribute("src", "/images/icon-menu.svg");
  }
});

dropdownLink1.addEventListener("click", () => {
  dropdownList1.classList.toggle("active-dropdown");
  arrow1.innerHTML = `<img src="/images/icon-arrow-down.svg" alt="icon-arrow-up">`;
});

dropdownLink2.addEventListener("click", () => {
  dropdownList2.classList.toggle("active-dropdown");
});

body.addEventListener("click", () => {
  if (
    dropdownList1.classList.contains("active-dropdown") ||
    dropdownList2.classList.contains("active-dropdown") ||
    navigation.classList.contains("active")
  ) {
    dropdownList1.classList.remove("active-dropdown");
    dropdownList2.classList.remove("active-dropdown");
    navigation.classList.remove("active");
  }
});
