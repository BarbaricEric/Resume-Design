const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const communicationSocial = document.getElementById("communication");

//Listen for contact link
communicationSocial.addEventListener('click', ()=>{
	alert ("\r\n \r\nBusiness Inquiry: ericznguyen@gmail.com \r\n \r\nOther Inquiry: enguyen6@uci.edu");
})

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

/*function emailView() {
    alert("\r\n \r\nBusiness Inquiry: ericznguyen@gmail.com \r\n \r\nOther Inquiry: enguyen6@uci.edu");
}*/
