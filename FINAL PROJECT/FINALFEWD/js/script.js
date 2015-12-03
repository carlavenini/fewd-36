console.log("this works");
 
// Setting up the global variables (grabbed elements from the DOM)
 var chocolate= document.getElementById("chocolate");
 var run= document.getElementById("run");
 var alcohol= document.getElementById("alcohol");
 var orgasm= document.getElementById("orgasm");
 var coloring= document.getElementById("coloring");
 var porn= document.getElementById("porn");




 var levelSpike = document.getElementById("levelSpike");
 var stimulusInfo = document.getElementById("stimulusInfo");



//MORE BUTTON
 var more = document.getElementById("more");
 // var run = 


 var information= document.querySelector(".information");

 // Stimuli Variables

 var chocolate_text = "Your brain produces dopamine when you eat chocolate and also when you think about eating chocolate, according to Georgia Health Sciences University.";
 var chocolateStimulus = "more information about DARK CHOCOLATE and how it affects you";
 var chocolateLevel = "100%"
 


 var run_text = "Running and overall exercise might increase your brain's ability to take up serotonin from your blood and increase dopamine production.";
 var runStimulus = "more information about RUNNING and how it affects you";
 var runLevel = "325%"



 var alcohol_text = "Alcohol in moderation is great for you, because it does not lead to an increase of dopamine throughout the brain; it only causes an increase in dopamine in the area of the reward pathway... ";
 var alcoholStimulus = "more information about ALCOHOL and how it affects you";
 var alcoholLevel = "125%"



 var orgasm_text = "Orgasm has been described as the epitome of pleasure, produced by a sequence of involuntary yet rhythmic pelvic muscle contractions (Georgiandis & Kringelbach, 2012). It also includes sharp peaks in cardiovascular arousal, loss of control, feelings of release, altered states of consciousness, and an altered sense of space and time (Holstege et al., 2003). ";
 var orgasmStimulus = "more information about ORGASMS and how they affect you";
 var orgasmLevel = "250%"


 var coloring_text = "Concentating on coloring is someitmes better than meditation";
 var coloringStimulus = "more information about COLORING BOOKS and how they affect you";
 var coloringLevel = "85%"


 var porn_text = "Sex or porn also trigger the release of oxytocin and vasopressin. These hormones help to lay down the long-term memories for the cells. They bind a person’s memories to the object that gave him or her the sexual pleasure.";
 var pornStimulus = "more information about PORN and how they affect you";
 var pornLevel = "250%"
 

 // Adding Event Listeners

 chocolate.addEventListener("mouseover", changeChocolate);
 run.addEventListener("mouseover", changeRun);
 alcohol.addEventListener("mouseover", changeAlcohol);
 orgasm.addEventListener("mouseover", changeOrgasm);
 coloring.addEventListener("mouseover", changeColoring);
 porn.addEventListener("mouseover", changePorn);

 more.addEventListener("click", show);


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

function changeColoring(e){
 		e.preventDefault();
 		information.textContent = coloring_text;
 		stimulusInfo.textContent = coloringStimulus;
 		levelSpike.textContent = coloringLevel;
 	}

function changePorn(e){
 		e.preventDefault();
 		information.textContent = porn_text;
 		stimulusInfo.textContent = pornStimulus;
 		levelSpike.textContent = pornLevel;
 	}

//Collapsible Element (MORE)


function show(){
	alert("this works");
	if(document.getElementById('expand').style.display == 'none')

	document.getElementById('expand').style.display = 'block';

	else
	document.getElementById('expand').style.display = 'none';
}



/////GRAPH////
var vis = d3.select('#visualisation'),
    WIDTH = 600,
    HEIGHT = 200,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d) {
      return d.x;
    }), d3.max(lineData, function(d) {
      return d.x;
    })]),
    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
      return d.y;
    }), d3.max(lineData, function(d) {
      return d.y;
    })]),
    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),
    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient('left')
      .tickSubdivide(true);

vis.append('svg:g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
  .call(xAxis);

vis.append('svg:g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
  .call(yAxis);



