var modal = document.getElementById('mymodal');
var close = document.getElementsByTagName('span')[0];

function appear() {
	modal.style.display = 'block';
}
// Will wait 3 seconds before appearing
setTimeout(appear, 3000);

// close button to close modal
close.onclick = function() {
	modal.style.display = "none";
}