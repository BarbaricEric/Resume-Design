//DOM Elements
const images = document.querySelectorAll('.img-gallery');
const imagesLight = document.querySelector('.images-light');
const contentLight = document.querySelector('.open-images');
const hamburgerHold = document.querySelector('.hamburger-holder');
const cardDetails = document.querySelectorAll('.card');

images.forEach(images => {
	images.addEventListener('click', () => {
	 appendImages(images.getAttribute('src'))
	})
})

imagesLight.addEventListener('click', (e)=>{
	if(e.target !== contentLight){
	 imagesLight.classList.toggle('show')
	 contentLight.classList.toggle('showImage')
	 hamburgerHold.style.opacity = '1'
	 cardDetails.forEach(card => {card.style.display = 'block'})
	}	
})

const appendImages = (images) => {
	contentLight.src = images
	imagesLight.classList.toggle('show')
	contentLight.classList.toggle('showImage')
	hamburgerHold.style.opacity = '0'
	cardDetails.forEach(card => {card.style.display = 'none'})
} 
