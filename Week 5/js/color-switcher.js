  
  var color1 = document.querySelector(".olive");
	var color2 = document.querySelector(".skyblue");
	var color3 = document.querySelector(".salmon");
	var color4 = document.querySelector(".burlywood");
	var color5 = document.querySelector(".thistle");

  var list = document.querySelector("ul");


// Set Up
var theme = {
  'color': 'white'
};
// Events
// -----------------------

window.addEventListener("load", pageLoad);
list.addEventListener("click", changeColor);

// Eventhandler functions
// -----------------------
// function changeColor(color) {
//    var body = document.querySelector("body");
//    body.setAttribute("class", color);
// }
function handleClick(event){
// console.log("changeColor");
//   console.log(event.target.tagName);

  if (event.target.tagName = "UL") {
    return;
  }
   var swatchElement = event.target;
   var swatchcolor = swatch.getAttribute("class");

// 1. update data model
   theme.color = swatchColor;

// 2.C Call function to update page
   changeColor(theme);

// 3.save the date model to a local storage
   localStorage.setItem('theme', JSON.stringify(theme))
 }

function pageLoad(event) {
  // get the theme object out of localStorage
      if (JSON.parse(localStorage.getItem('theme') == null){
        changeColor(theme);
      } else {
        theme = JSON.parse(localStorage.getItem('theme')) == null){
        changeColor(theme);
      }
 }     
  var theme = JSON.parse(localStorage.getItem('theme'))
// console.log(theme);

changeColor(theme);
}


// Update page functions
function changeColor(event) {
  var body = document.querySelector("body");
   body.className = color;

   var name = document.querySelector("span");
   name.textContent = color;
   // console.log(name);  this is how you test the line in the CONSOLE
}



// function test (event) {
// 	var swatch = event.target;
// 	console.log(event);
	
// }
