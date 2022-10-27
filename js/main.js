const btn = document.querySelector('.nav__menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=> {
   nav.classList.toggle('menu-open'); 
});