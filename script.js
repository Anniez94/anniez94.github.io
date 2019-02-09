var hamburger = document.querySelector(".hamburger");
var btnShow = document.querySelector("div")[2];
var menu = document.getElementsByTagName("div")[3];
var showHamburger= document.getElementsByTagName("div")[2];

hamburger.addEventListener("click", function(){
    menu.classList.toggle("menu");
    menu.classList.toggle("menu-showcase");
});
