const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navigation');



hamburger.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})
