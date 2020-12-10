//DOM Elements
const images = document.querySelectorAll('.img-gallery');
const imagesLight = document.querySelector('.images-light');
const contentLight = document.querySelector('.open-images');
const hamburgerHold = document.querySelector('.hamburger-holder');
const cardDetails = document.querySelector('.card');

images.forEach(images =>{
	images.addEventListener('click', ()=>{
	 appendImages(images.getAttribute('src'))
	})
})

imagesLight.addEventListener('click', (e)=>{
	if(e.target !== contentLight){
	 imagesLight.classList.toggle('show')
	 contentLight.classList.toggle('showImage')
	 hamburgerHold.style.opacity = '1'
	 cardDetails.style.display = 'block'
	}	
})

const appendImages = (images)=>{
	contentLight.src = images
	imagesLight.classList.toggle('show')
	contentLight.classList.toggle('showImage')
	hamburgerHold.style.opacity = '0'
	cardDetails.style.display = 'none'
} 
