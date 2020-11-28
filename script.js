var Question = [
  {
    Title: "Question 1: Commonly used datatypes DO NOT include ________.",
    Choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    Answer: "Alerts"
  },
  {
    Title: "Question 2: The condition of an if / else statement is enclosed within _______.",
    Choices: ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
    Answer: "Curly Braces"
  },
  {
    Title: "Question 3: Arrays in javascript can be used to store _______.",
    Choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    Answer: "All of the Above"
  },
  {
    Title: "Question 4: String values must be enclosed within _______ when being assigned to variables.",
    Choices: ["Commas", "Curly Braces", "Quotes", "Parenthesis"],
    Answer: "Commas"
  }
]



var body = document.body;
var Score = document.getElementById("Score");
var scoreValue = 0
Score.innerHTML = "Your score: " + scoreValue
var questionTitle = document.getElementById("Questiontitle");
var questionContent = document.getElementById("Questioncontent");
var continueButton = document.getElementById("Continue");
var quizDiv = document.getElementById("Quizdiv");
var answerOne = document.getElementById("Answer1");
var answerTwo = document.getElementById("Answer2");
var answerThree = document.getElementById("Answer3");
var answerFour = document.getElementById("Answer4");
var currentQuestion = 0
var answerMessage = document.getElementById('answer-message')
var secondsLeft = 70
var Timer = document.getElementById("Timer")
Timer.textContent = "Time Remaining: " + secondsLeft;







  questionTitle.innerHTML = "Coding Quiz"
  questionContent.innerHTML = "Press continue to start the timer and begin the quiz."
  continueButton.innerHTML = "Continue"
  answerOne.style.visibility = "hidden"
  answerTwo.style.visibility = "hidden"
  answerThree.style.visibility = "hidden"
  answerFour.style.visibility = "hidden"





continueButton.addEventListener("click", getQuestions);
continueButton.addEventListener("click", setTime)

function getQuestions(){

  answerOne.style.visibility = "visible"
  answerTwo.style.visibility = "visible"
  answerThree.style.visibility = "visible"
  answerFour.style.visibility = "visible"
  continueButton.style.visibility = "hidden"
  questionTitle.style.visibility = "hidden"



questionContent.textContent = Question[currentQuestion].Title;
var allButton = document.getElementsByClassName("AnswerBtn")
allButton[0].textContent = Question[currentQuestion].Choices[0];
allButton[1].textContent = Question[currentQuestion].Choices[1];
allButton[2].textContent = Question[currentQuestion].Choices[2];
allButton[3].textContent = Question[currentQuestion].Choices[3];


allButton[0].addEventListener('click', checkAnswer);
allButton[1].addEventListener('click', checkAnswer);
allButton[2].addEventListener('click', checkAnswer);
allButton[3].addEventListener('click', checkAnswer);

}

function checkAnswer(event) {

  if (event.target.innerHTML === Question[currentQuestion].Answer) {
    scoreValue++; 
    answerMessage.style.display = 'block';
    answerMessage.textContent = 'Correct!';
    answerMessage.className = 'answer-message';
    currentQuestion ++;
    secondsLeft += 5;
    
  
  }else {
    currentQuestion ++;
    scoreValue --;
    answerMessage.style.display = 'block';
    answerMessage.textContent = 'Incorrect!';
    answerMessage.className = 'answer-message';
    secondsLeft -= 5;
  }

getQuestions()

} 
var timeNonLoop = (function() {
  var executed = false;
  return function() {
      if (!executed) {
          executed = true;
          setTime()
      }
  };
})();

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    Timer.textContent = "Time Remaining: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}







