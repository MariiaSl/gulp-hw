const btnMenu = document.getElementById("btn-menu");
console.log(btnMenu);
const menu = document.querySelector(".nav__content--wrapper");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("nav__toggle-open");
  menu.classList.toggle("nav__content--wrapper-open");
});
