
const Burger = document.getElementById("Burger");
const navbar = document.getElementById("navbar");

Burger.addEventListener("click", function(){
    Burger.classList.toggle("Menu");
    navbar.classList.toggle("Menu");
})