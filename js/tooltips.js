// had to wrap lines 3-5 in a DOMContentLoaded event listener
// in order to get tooltips to function. There are other ways..
document.addEventListener("DOMContentLoaded", function(event) {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
});
