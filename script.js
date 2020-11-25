//look at the speedreader to figure out popping up new window
//need to write an array of questions for the div
var body = document.body;
var score = 0
var questionTitle = document.getElementById("Questiontitle");
var questionContent = document.getElementById("Questioncontent");
var answerOne = document.getElementById("Answer1")
var answerTwo = document.getElementById("Answer2")
var answerThree = document.getElementById("Answer3")
var answerFour = document.getElementById("Answer4")
var continueButton = document.getElementById("Continue");
var quizDiv = document.getElementById("Quizdiv");


  questionTitle.textContent = "Coding Quiz"
  questionContent.textContent = "Press continue to start the timer and begin the quiz."
  continueButton.textContent = "Continue"
  answerOne.style.visibility = "hidden"
  answerTwo.style.visibility = "hidden"
  answerThree.style.visibility = "hidden"
  answerFour.style.visibility = "hidden"

  continueButton.addEventListener("click", questionOne)

  function questionOne (){
    continueButton.style.visibility = "hidden"
    questionTitle.style.visibility = "hidden"
    questionContent.textContent = "Commonly used datatypes do not include ___."
    answerOne.style.visibility = "visible"
    answerOne.textContent = "1. String"
    answerTwo.style.visibility = "visible"
    answerTwo.textContent = "2. Booleans"
    answerThree.style.visibility = "visible"
    answerThree.textContent = "3. Alerts"

    answerFour.style.visibility = "visible"
    answerFour.textContent = "4. Numbers"
    answerOne.addEventListener("click", questionTwo)
    answerTwo.addEventListener("click", questionTwo)
    answerThree.addEventListener("click", questionTwo)
    answerFour.addEventListener("click", questionTwo)
   
    
  } 

function questionTwo (){


  questionContent.textContent = "The condition of an if / else statement is enclosed within _______. "
  answerOne.textContent = "1. Quotes"
  answerTwo.textContent = "2. Curly Braces"
  answerThree.textContent = "3. Parenthesis"
  answerFour.textContent = "4. Square Brackets"

}
