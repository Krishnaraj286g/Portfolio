// navbar

document.addEventListener("DOMContentLoaded",()=>{
let navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{
    navbar.classList.toggle("zoom-out",window.scrollY > 0);
});
});

