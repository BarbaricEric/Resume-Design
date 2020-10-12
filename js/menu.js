const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navigation');
const hamburgertext = document.querySelector('.hamburger-text');
const exitmenu = document.querySelector('#logout');

hamburger.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})

hamburgertext.addEventListener('click', ()=>{
	menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
	if(menu.classList.contains('spread')
	 && e.target != menu && e.target != hamburger && e.target != hamburgertext ){
	 
         menu.classList.toggle("spread")
	
	}
})
