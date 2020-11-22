//look at the speedreader to figure out popping up new window
//need to write an array of questions for the div
var body = document.body;
var score = 0
var Div1 = document.createElement("div")
var Title = document.createElement("h1");
var P1 = document.createElement("p");
var button1 = document.createElement("button");

body.appendChild(Div1)

//Title attributes
Title.textContent = "Coding Quiz"
Title.setAttribute("style", "margin:auto; width:50%; text-align:center;");
Div1.appendChild(Title)

//P attributes
P1.textContent = "Click Start Quiz to begin."
P1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
Div1.appendChild(P1)

//Button Attributes

button1.textContent = "Start Quiz"
button1.setAttribute("style", " display:flex; align-items:center; justify-content:center;");
button1.addEventListener("click", pageTwo);
Div1.appendChild(button1)

function pageTwo(){
    P1.style.visibility = "hidden";
    Title.style.visibility = "hidden";

    Div1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
    //change this to a part of the questions array
    Div1.textContent = "Commonly used datatypes do not include ___";
    Div1.style.visibility = "visible";






    Div1.appendChild(div2);
}

      


//change this
function setScore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreName",  document.getElementById('name').value);
  getScore();
}
