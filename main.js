let menu_btn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  menu_btn.classList.remove("fa-times");
  navbar.classList.remove("active");
});

document.querySelector(".home").addEventListener("mousemove", (e) => {
  let x = (window.innerWidth - e.pageX * 2) / 90;
  let y = (window.innerHeight - e.pageY * 2) / 90;
  document.querySelector(
    ".parallax-img"
  ).style.transform = `translateX(${y}px) translateY(${x}px)`;
});

document.querySelector(".home").addEventListener("mouseleave", () => {
  document.querySelector(
    ".parallax-img"
  ).style.transform = `translateX(0px) translateY(0px)`;
});

document.querySelector("#cart-btn").addEventListener("click", () => {
  document.querySelector(".shopping-cart").classList.toggle("active");
  document.querySelector(".login-form").classList.remove("active");
  document.querySelector(".search-container").classList.remove("active");
});

document.querySelector("#login-btn").addEventListener("click", () => {
  document.querySelector(".login-form").classList.toggle("active");
  document.querySelector(".shopping-cart").classList.remove("active");
  document.querySelector(".search-container").classList.remove("active");
});

document.querySelector("#search-btn").addEventListener("click", () => {
  document.querySelector(".search-container").classList.toggle("active");
  document.querySelector(".shopping-cart").classList.remove("active");
  document.querySelector(".login-form").classList.remove("active");
});
