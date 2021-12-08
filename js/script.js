const menuBar = document.querySelector("#menu__nav");
const menuUser = document.querySelector("#menu__user");

menuBar.onclick = () => {
  document.querySelector(".header__menu").classList.toggle("active");
  menuBar.classList.toggle("fa-times");

  document.querySelector(".header__auth").classList.remove("active");
  menuUser.classList.remove("active");
};

menuUser.onclick = () => {
  menuUser.classList.toggle("active");
  document.querySelector(".header__auth").classList.toggle("active");

  document.querySelector(".header__menu").classList.remove("active");
  menuBar.classList.remove("fa-times");
};

window.onscroll = () => {
  document.querySelector(".header__auth").classList.remove("active");
  menuUser.classList.remove("active");

  document.querySelector(".header__menu").classList.remove("active");
  menuBar.classList.remove("fa-times");
};
