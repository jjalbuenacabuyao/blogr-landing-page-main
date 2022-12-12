const navToggler = document.querySelector("[data-nav-toggle]")
const nav = document.querySelector(".nav")

navToggler.addEventListener("click", () => {
  let isVisible = nav.getAttribute("data-visible")
  if (isVisible == "false"){
    navToggler.setAttribute("aria-expanded", true)
    nav.setAttribute("data-visible", true)
  } else {
    navToggler.setAttribute("aria-expanded", false)
    nav.setAttribute("data-visible", false)
  }
})