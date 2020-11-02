var cuizXVI = '1.0'; // Transparency.
var spanXVI = document.createElement('span');
spanXVI.innerHTML = '<button id="KTVX1997PLUSONE" style="position:absolute;bottom:0;right:0;color:black;background-color:green;opacity: ' + cuizXVI + ';z-index: 1000;">A</button>';
document.body.appendChild(spanXVI);

var buttonXVI = document.getElementById("KTVX1997PLUSONE");

buttonXVI.addEventListener("click", function () {
	if (this.innerText == "A") {
		this.innerText = "B";
	}
});
function handleResponse(message) {
	console.log(`Message from the background script:  ${message.response}`);
}
function handleError(error) {
	console.log(`Error: ${error}`);
}
var intervalXVI = setInterval(function () {
	var buttonXVITW = document.getElementById("KTVX1997PLUSONE");
	if (buttonXVITW.innerText == "B") {
		buttonXVITW.innerText = "A";
		var sending = browser.runtime.sendMessage({ method: "business.saveTab" }); /* This interracts with the background script. */
		sending.then(handleResponse, handleError);
		buttonXVITW.innerText = "A";
	}
}, 3000);