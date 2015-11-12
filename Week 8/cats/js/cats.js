// Structure
// ----------------------------------------------


var pictures = document.querySelector(".pictures");
var names = document.querySelector(".names");
var feed = document.querySelector(".feed");

// Events
// ----------------------------------------------


// Setup
// ----------------------------------------------
var cat = {
	picture: "baby.jpg",
	name: "Daisy"
}

// Event handlers
// ----------------------------------------------
window.addEventListener("load", setupPage);

// Update page functions
// ----------------------------------------------
function setupPage(){
	mockPictures.forEach(createPicture);
	mockNames.forEach(pickName);
}

function pickName(item) {

	var li = document.createElement("li");

	li.textContent = item;

	names.appendChild(li);


}


function createPicture(item) {


	// step 1: Create Elements
	var li = document.createElement("li"); 
	var img = document.createElement("img"); 

	// step 2: Decorate Elements
	img.setAttribute("src", "images/" + item);

	// step 3: insert in the dom
	li.appendChild(img);
	pictures.appendChild(li);
}


function createPst(item) {


	// step 1: Create Elements
	var li = document.createElement("li"); 
	var img = document.createElement("img");
	var p = document.createElement("p");  

	// step 2: Decorate Elements
	p.textContent = item.name;
	img.setAttribute("src", "images/" + item.picture);

	// step 3: insert in the dom
	li.appendChild(p);
	li.appendChild(img);
	pictures.appendChild(li);
	
}