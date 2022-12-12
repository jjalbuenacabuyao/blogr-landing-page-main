const navToggler = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector(".nav");

navToggler.addEventListener("click", () => {
  let isVisible = nav.getAttribute("data-visible") === "false";
  (isVisible) ? showNav() : hideNav();
})

const showNav = () => {
  navToggler.setAttribute("aria-expanded", "true");
  nav.setAttribute("data-visible", "true");
}

const hideNav = () => {
  navToggler.setAttribute("aria-expanded", "false");
  nav.setAttribute("data-visible", "false");
}