// Variables

  	var colorStop = document.querySelector(".red");
	var colorSlow = document.querySelector(".yellow");
	var colorGo = document.querySelector(".green");

	var buttonStop =document.querySelector(".red");
	var buttonSlow =document.querySelector(".yellow");
	var buttonGo =document.querySelector(".green");



// Events Listeners
// -----------------------
buttonStop.addEventListener("click", changeColor1);
buttonSlow.addEventListener("click", changeColor2);
buttonGo.addEventListener("click", changeColor3);



// Functions

function changeColor1(event) {
  var stop = colorStop.classList.remove(".hidden");
 	return stop 
}

function changeColor2(event) {
   colorSlow.classList.remove(".hidden");
   
}

function changeColor3(event) {
   colorGo.classList.remove(".hidden");
   
}
console.log ()
