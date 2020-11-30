const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const communicationSocial = document.getElementById("communication");
const BROSWERSUPPORT = document.querySelector('.banner-support');
const mainsite = document.querySelector('.banner-logo');

//View tab content
function selectItem() {
  
}

function removeShow() {
 tabContentItems.forEach(item => item.classList.remove('showTab'));
}

//Warning Message: Supported Browser
async function browseView() {
    //document.getElementById("warningmessage").textContent = "For best interactive experience, view on desktop.";
    document.getElementById("supportmessage").textContent = "Website may behave differently depending on each user's device and device setting";
    BROSWERSUPPORT.style.display = 'none';
}

//Browser Support Banner
setTimeout(() => {browseView();}, 5.0*1000);

//Listen for email click link
communicationSocial.addEventListener('click', ()=>{
	//alert ("\r\n \r\nBusiness Inquiry: ericznguyen@gmail.com \r\n \r\nOther Inquiry: enguyen6@uci.edu");
	  alert ("\r\nCommunication Inquiry: ericznguyen@gmail.com");
})

//Listen for main site click link
mainsite.addEventListener('click', ()=>{
	const url = 'https://www.endesign.tk';
        const win = window.open(url, '_blank');
})

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
