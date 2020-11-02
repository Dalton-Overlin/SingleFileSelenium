var cuizXVI = '1.0'; // Transparency.
var spanXVI = document.createElement('span');
spanXVI.innerHTML = '<button id="KTVX1997PLUSONE" style="position:fixed;bottom:0;right:0;color:black;background-color:green;opacity: ' + cuizXVI + ';z-index: 1000;">A</button>';
document.body.appendChild(spanXVI);

var buttonXVI = document.getElementById("KTVX1997PLUSONE");

buttonXVI.addEventListener("click", function () {
	if (this.innerText == "A" || this.innerText == "E" || this.innerText == "D") {
		this.innerText = "B";
	}
});
/*
A: Not ran yet.
B: Needs to start a save.
S: Is currently saving the page.
D: Process is done.
E: Error has occured.
*/
var intervalXVI = setInterval(function () {
	var buttonXVITW = document.getElementById("KTVX1997PLUSONE");
	if (buttonXVITW.innerText == "B") {
		buttonXVITW.innerText = "S";
		try {
		    browser.runtime.sendMessage({ method: "business.saveTab" }); /* This interracts with the background script. */
		    buttonXVITW.innerText = "D";
		}
		catch (Exo){
		    buttonXVITW.innerText = "E";
		    console.log("An error occured: "+Exo);
		}
	}
}, 3000);
