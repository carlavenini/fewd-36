console.log("this works");
 
// Setting up the global variables (grabbed elements from the DOM)
 var chocolate= document.getElementById("chocolate");
 var run= document.getElementById("run");
 var alcohol= document.getElementById("alcohol");
 var orgasm= document.getElementById("orgasm");
 var levelSpike = document.getElementById("levelSpike");
 var stimulusInfo = document.getElementById("stimulusInfo");
 // var run = 


 var information= document.querySelector(".information");

 // Stimuli Variables

 var chocolate_text = "Chocolate tastes great";
 var chocolateStimulus = "more information about DARK CHOCOLATE and how it affects you";
 var chocolateLevel = "100%"
 


 var run_text = "Running is great";
 var runStimulus = "more information about RUNNING and how it affects you";
 var runLevel = "325%"



 var alcohol_text = "Alcohol is great for you";
 var alcoholStimulus = "more information about ALCOHOL and how it affects you";
 var alcoholLevel = "125%"



 var orgasm_text = "Sex is great for you";
 var orgasmStimulus = "more information about ORGASMS and how they affect you";
 var orgasmLevel = "250%"

 

 // Adding Event Listeners

 chocolate.addEventListener("mouseover", changeChocolate);
 run.addEventListener("mouseover", changeRun);
 alcohol.addEventListener("mouseover", changeAlcohol);
 orgasm.addEventListener("mouseover", changeOrgasm);


 // Functions
 function changeChocolate(e){
 		e.preventDefault();
 		information.textContent = chocolate_text;
 		stimulusInfo.textContent = chocolateStimulus;
 		levelSpike.textContent = chocolateLevel;

 		}

function changeRun(e){
 		e.preventDefault();
 		information.textContent = run_text;
 		stimulusInfo.textContent = runStimulus;
 		levelSpike.textContent = runLevel;
 	}

function changeAlcohol(e){
 		e.preventDefault();
 		information.textContent = alcohol_text;
 		stimulusInfo.textContent = alcoholStimulus;
 		levelSpike.textContent = alcoholLevel;
 	}

function changeOrgasm(e){
 		e.preventDefault();
 		information.textContent = orgasm_text;
 		stimulusInfo.textContent = orgasmStimulus;
 		levelSpike.textContent = orgasmLevel;
 	}


 		// information.textContent  = chocolate_text;
 		// information.textContent  = run_text;
 		// information.textContent  = alcohol_text;
 		// information.textContent  = sex_text;




