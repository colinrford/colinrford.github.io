function growPrev() {
	var element = document.getElementById('grow');
	element.style.height = element.clientHeight ? "6em" : element.scrollHeight + "px";
}

function shrinkPrev() {
	var element = document.getElementById('grow');
	element.style.height = element.clientHeight ? element.scrollHeight + "px" : "6em";
}