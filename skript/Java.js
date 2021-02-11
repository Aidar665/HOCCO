var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")
ham.addEventListener("click", toggleHamburger)
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")}