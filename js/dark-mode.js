// from css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
// and stackoverflow.com/questions/53984830/uncaught-typeerror-cannot-read-property-addeventlistener-of-null-in-javascrip
document.addEventListener("DOMContentLoaded", function(event) {
	const btn = document.querySelector("#dm-toggle");
	btn.addEventListener("click", function() {
	  document.body.classList.toggle("dark-theme");
	});
});
