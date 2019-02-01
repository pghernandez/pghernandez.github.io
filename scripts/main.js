var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc == 'images/panama1.jpg') {
		myImage.setAttribute('src', 'images/panama2.jpg');
	} else {
		myImage.setAttribute('src', 'images/panama1.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is awesome, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
