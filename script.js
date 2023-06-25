burger = document.querySelector('.burger');
Navbar = document.querySelector('.navbar');
Navlist = document.querySelector('.nav-list');

burger.addEventListener("click", () => {
    Navbar.classList.toggle('h-nav-resp');
    Navlist.classList.toggle('v-nav-resp');
});
