  
  var color1 = document.querySelector(".olive");
	var color2 = document.querySelector(".skyblue");
	var color3 = document.querySelector(".salmon");
	var color4 = document.querySelector(".burlywood");
	var color5 = document.querySelector(".thistle");

  var list = document.querySelector("ul");

// Events
// -----------------------


list.addEventListener("click", changeColor);

// Eventhandler functions
// -----------------------
// function changeColor(color) {
//    var body = document.querySelector("body");
//    body.setAttribute("class", color);
// }

function makeLunch(event) {
}

function changeColor(event) {
  console.log("changeColor");
  console.log(event.target.tagName);

  if (event.target.tagName = "UL") {
    return;
  }

   var swatch = event.target;
   var color = swatch.className;
   var color = swatch.getAttribute("class");
   
   var body = document.querySelector("body");
   body.className = color;

   var name = document.querySelector("span");
   name.textContent = color;
   // console.log(name);  this is how you test the line in the CONSOLE
}



var theme = {
  color: "thistle"
}
// function test (event) {
// 	var swatch = event.target;
// 	console.log(event);
	
// }
