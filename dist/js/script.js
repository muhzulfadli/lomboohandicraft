const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navigation.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});
