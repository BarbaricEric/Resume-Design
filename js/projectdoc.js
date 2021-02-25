const gitsite = document.querySelector('.github-link');
const linkedsite = document.querySelector('.linedin-link');

//Listen for social site click link
gitsite.addEventListener('click', ()=>{
	const url = 'https://www.github.com/BarbaricEric';
 const win = window.open(url, '_blank');
})

linkedsite.addEventListener('click', ()=>{
	const url = 'https://www.linkedin.com/in/end';
 const win = window.open(url, '_blank');
})

/* GSAP Animation Interface */
gsap.from(".left-container", 2, {
 width: "0",
 ease: Expo.easeInOut
});

gsap.from(".logo", 2, {
 delay: 1.5,
 y: 20,
 opacity: 0,
 ease: Expo.easeInOut
});

gsap.from(".info", 2, {
 delay: 1.5,
 y: 50,
 opacity: 0,
 scale: 2.5,
 ease: Expo.easeInOut
});

gsap.from(".social", 2, {
 delay: 3.8,
 opacity: 0,
 y: 20,
 ease: Expo.easeInOut,
 stagger: 0.1
});
