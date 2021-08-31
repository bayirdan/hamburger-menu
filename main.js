const hamburgerBtn = document.querySelector("#js-hamburger-btn");
const hamburgerMenu = document.querySelector("#js-hamburger-menu");
const activeBg = document.querySelector("#js-active-bg");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  activeBg.classList.toggle("active");
});
