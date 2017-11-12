var my_image = document.getElementsByTagName('img');
var myimage = my_image[0];
myimage.onclick = function() {
	var my_src = myimage.getAttribute('src');
	if (my_src === 'images/firefox-icon.png') {
		myimage.setAttribute('src', 'images/love.png');
	} else {
		myimage.setAttribute('src',"images/firefox-icon.png");
	}
}

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');

function setUserName () {
	var myname = prompt('Please enter your name.');
	localStorage.setItem('name', myname);
	myheading.textContent = 'Mozilla is cool, ' + myname; 
}

if (!localStorage.getItem('name')){
	setUserName();
} else {
	var stored_name = localStorage.getItem('name');
	myheading.textContent = 'Mozilla is cool, ' + stored_name;
}
mybutton.onclick = function () {
	setUserName();
}