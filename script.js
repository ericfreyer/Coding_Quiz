var Question = [
  {
    Title: "Commonly used datatypes DO NOT include ________.",
    Choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    Answer: "Alerts"
  },
  {
    Title: "The condition of an if / else statement is enclosed within _______.",
    Choices: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
    Answer: "Curly Braces"
  },
  {
    Title: "Arrays in javascript can be used to store _______.",
    Choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    Answer: "All of the Above"
  },
  {
    Title: "String values must be enclosed within _______ when being assigned to variables.",
    Choices: ["Commas", "Curly Braces", "Quotes", "Parenthesis"],
    Answer: "Commas"
  }
]



var body = document.body;
var score = 0
var questionTitle = document.getElementById("Questiontitle");
var questionContent = document.getElementById("Questioncontent");
var continueButton = document.getElementById("Continue");
var quizDiv = document.getElementById("Quizdiv");
var answerOne = document.getElementById("Answer1");
var answerTwo = document.getElementById("Answer2");
var answerThree = document.getElementById("Answer3");
var answerFour = document.getElementById("Answer4");
var answerBtns = document.getElementById("AnswerBtns");

  questionTitle.innerHTML = "Coding Quiz"
  questionContent.innerHTML = "Press continue to start the timer and begin the quiz."
  continueButton.innerHTML = "Continue"
  answerOne.style.visibility = "hidden"
  answerTwo.style.visibility = "hidden"
  answerThree.style.visibility = "hidden"
  answerFour.style.visibility = "hidden"

  



  continueButton.addEventListener("click", getQuestions)

function getQuestions(){
  answerOne.style.visibility = "visible"
  answerTwo.style.visibility = "visible"
  answerThree.style.visibility = "visible"
  answerFour.style.visibility = "visible"

  
questionTitle.innerHTML = Question[0].Title;
answerOne.innerHTML = Question[0].Choices[0]
answerTwo.innerHTML = Question[0].Choices[1]
answerThree.innerHTML = Question[0].Choices[2]
answerFour.innerHTML = Question[0].Choices[3]
}