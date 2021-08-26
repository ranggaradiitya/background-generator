var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomButton() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var random1 = "#" + randomColor1
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	var random2 = "#" + randomColor2
	body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
	css.textContent = body.style.background + ";";
}

random.addEventListener("click", randomButton);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);