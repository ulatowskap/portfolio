let navicon = document.getElementById("nav-icon1");
let menu = document.getElementById("menu")


navicon.addEventListener("click", function () {
    this.classList.toggle("open");
    menu.classList.toggle("aside");
});