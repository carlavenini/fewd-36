// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;



// Events
// ------------------------------------------------
form.addEventListener("submit", enter);



// Functions
function enter(event) {
  	event.preventDefault();
  	var newItemValue = input.value;
  	var newItem = document.createElement("LI");
  	newItem.textContent = newItemValue;
  	entries.appendChild(newItem)
  	totalValue = totalValue + parseFloat(newItemValue);
 	total.textContent = totalValue;
}



var inputValue = input.value
var menuItem = document.createElement("li")
menuItem.textContent = inputValue 

var entries = document.querySelector(".entries")
entries.appendChild(menuItem)
