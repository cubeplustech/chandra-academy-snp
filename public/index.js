const toggle = document.getElementById("toggle");
const navbar = document.getElementsByClassName("navbar-container");

const togglefun = () => {
  toggle.classList.toggle("active");
  navbar[0].classList.toggle("slidenav");
};

let scrollPotint;
window.addEventListener("scroll", () => {
  scrollPotint = scrollY;
  if (scrollPotint > 0) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});
