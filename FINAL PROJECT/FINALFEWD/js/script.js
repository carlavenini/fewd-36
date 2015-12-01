console.log("this works");
 
// Setting up the global variables
 var chocolate= document.getElementById("chocolate");
 var run= document.getElementById("run");
 var alcohol= document.getElementById("alcohol");
 var sex= document.getElementById("sex");
 // var run = 


 var information= document.querySelector(".information");

 // Stimuli Variables

 var chocolate_text = "Chocolate tastes great";
 var run_text = "Running is great";
 var alcohol_text = "Alcohol is great for you";
 var sex_text = "Sex is great for you";

 // Adding Event Listeners

 chocolate.addEventListener("mouseover", changeText);
 run.addEventListener("mouseover", changeText);
 alcohol.addEventListener("mouseover", changeText);
 sex.addEventListener("mouseover", changeText);


 // Functions
 function changeText(e){
 		e.preventDefault();
 		information.textContent  = chocolate_text;
 		information.textContent  = run_text;
 		information.textContent  = alcohol_text;
 		information.textContent  = sex_text;

 }