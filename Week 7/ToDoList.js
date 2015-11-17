//structure
var list        = document.querySelector("ul");
var button      = document.querySelector("button");
var username    = document.querySelector(".username");
var comment     = document.querySelector(".comment");
var checkbox = document.createElement("input");
var span = document.createElement("span");

console.log(username);
console.log(comment);

//events
button.addEventListener("click", addComment);
comment.addEventListener("keyup", addComment);

//Event Handler functions
function addComment(e){
   var key = e.keyCode;
   //console.log(e);
   
   //what i think is happening
   //keyCode 13 is the enter key
   //if keyCode exsist and is not 13
   //then return early
   if (key && key !=13){
       return;
   }

   var userNameValue = username.value;
   var commentValue = comment.value;
   
   //step one; create element
   var newItem = document.createElement("LI");
   
   
   
   //step two; decorate the element
   newItem.innerHTML = '<input type=\"radio\" />' + userNameValue +' ' + commentValue;
   
   
   //step three; insert the element
   list.appendChild(newItem);  
   li.appendChild(label);
   label.appendChild(checkbox);
   label.appendChild(span);
   tasks.appendChild(li); 
}

function testIt(event) {
      console.log("testIt");
      console.log(event.target);
      event.target.className = "checked";
}

var tasks = [];
var task1 = {
   name: "exercise",
   date: undefined,
   completed: false

}

var task2 = {
   name: "mow lawn",
   date: undefined,
   completed: false

}

var task3 = {
   name: "laundry",
   date: undefined,
   completed: false

}