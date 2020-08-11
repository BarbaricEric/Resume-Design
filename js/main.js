const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const communicationSocial = document.getElementById("communication");

//View tab content
function selectItem() {
  
}

//Warning Message: Supported Browser
function browseView() {
    document.getElementById("warningmessage").innerHTML = "For best experience, view on desktop.";
    document.getElementById("supportmessage").innerHTML = "Website may behave differently depending on each user's setting and device";	
}

broseView();

//Listen for contact link
communicationSocial.addEventListener('click', ()=>{
	alert ("\r\n \r\nBusiness Inquiry: ericznguyen@gmail.com \r\n \r\nOther Inquiry: enguyen6@uci.edu");
})

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
