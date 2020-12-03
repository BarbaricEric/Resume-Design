//DOM Elements
const images = document.querySelectorAll('.img-gallery');
const imagesLight = document.querySelector('.images-light');
const contentLight = document.querySelector('.open-images');
const hamburger1 = document.querySelector('.hamburger');

images.forEach(images =>{
	images.addEventListener('click', ()=>{
	 appendImages(images.getAttribute('src'))
	})
})

contentLight.addEventListener('click', (e)=>{
	if(e.target !== imagesLight){
	 contentLight.classList.toggle('show')
	 imagesLight.classList.toggle('showImage')
	 hamburger1.style.opacity = '1'
	}	
})

const appendImages = (images)=>{
	imagesLight.src = images
	contentLight.classList.toggle('show')
	imagesLight.classList.toggle('showImage')
	hamburger1.style.opacity = '0'	
} 
