const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navigation');
const hamburgertext = document.querySelector('.hamburger-text');
const exitmenu = document.querySelector('#logout');
const accordionitem = document.querySelector('.accordion-container');
const navbarco = document.querySelector('.social-media-list-alt');
const closeone = document.querySelector('.menu-close');
const closetwo = document.querySelector('.menu-close-text');

/*hamburger.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})

hamburgertext.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})

exitmenu.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
	if(menu.classList.contains('spread')
	 && e.target != menu && e.target != hamburger && e.target != hamburgertext ){
	 //&& (e.target = hamburger || e.target = hamburgertext ){
		
         menu.classList.toggle("spread")
	
	}
}) */

window.addEventListener('click', e=>{
	
	if(e.target == hamburger && e.target == hamburgertext){
         menu.classList.add("spread");
	} else(e.target == exitmenu && e.target == closeone && e.target == closetwo) {
         menu.classList.remove("spread");
	}
	
})
