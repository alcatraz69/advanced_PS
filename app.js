
const hamburger = document.querySelector('#menu-toggle');
const navlinks = document.querySelector('#main-menu');
const links = document.querySelectorAll('#main-menu li');


hamburger.addEventListener('click', () =>{
    navlinks.classList.toggle("open");
    
});