// from css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
// and stackoverflow.com/questions/53984830/uncaught-typeerror-cannot-read-property-addeventlistener-of-null-in-javascript
// the additional functions were written after reading about sessionStorage, see e.g. MDN
let light = "light";
let dark = "dark";
let mode = "mode";

function setToLight() {	sessionStorage.setItem(mode, light); }

function setToDark() { sessionStorage.setItem(mode, dark); }

function toggleMode() {
	document.body.classList.toggle("dark-theme");
}

function doNothing() {}

function checkAndLoad() {
	if (sessionStorage.getItem(mode)) {
	  let storedMode = sessionStorage.getItem(mode);
		let currentModeIsDark = document.body.classList.contains("dark-theme");
		storedMode == dark && !currentModeIsDark ? toggleMode() : doNothing();
	} else {
		setToLight();
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	const btn = document.querySelector("#dm-toggle");
	checkAndLoad();
	btn.addEventListener("click", function() {
		document.body.classList.toggle("dark-theme") ? setToDark() : setToLight();
	});
});
