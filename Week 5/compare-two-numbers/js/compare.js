	// Variables

   var tempF = document.querySelector(".temp-f");
	var tempC = document.querySelector(".temp-c");
   
   var buttonF = document.querySelector(".toF");
   var buttonC = document.querySelector(".toC");

// Event Listeners
buttonC.addEventListener("click", calculateC);
buttonF.addEventListener("click", calculateF);







// Functions
function calculateC() {
   var calcC = tempC.value * (9/5) + 32;
console.log(calcC);
   tempF.value = calcC; 
}

function calculateF() {
   var calcF = tempF.value (fahrenheit - 32) * 5/9;
console.log(calcF);
   tempC.value = calcF; 



}









   // conditionals 
   // log greater
   // Eg: if num1 > num2
   // log less
   // if else num1 > num2

   // 	else
   // 		console log =

   // var sign.textContent = 

   // sign.textContent <

   // sign.textContent >
   // update sign.textContent = x;

   // sign.textContent