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
  },
  {
    Title: "Question 5: A very useful tool during development and debugging for printing content to the debugger is:",
    Choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    Answer: "console.log"
  },
  {
    Title: "Press continue to store your score",
    Choices: [],
    Answer: ""
  }
]



var body = document.body;
var Score = document.getElementById("Score");
var scoreValue = 0
Score.textContent = "Your score: " + scoreValue
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
var continueTwo = document.getElementById("ContinueTwo")
Timer.textContent = "Time Remaining: " + secondsLeft;







  questionTitle.innerHTML = "Coding Quiz"
  questionContent.innerHTML = "Welcome to the coding quiz! There are five questions. Every question you guess correctly will add five points to your score and add five seconds to the time, and each wrong answer will take three points away and take five seconds off the timer. Press continue to start the timer and begin the quiz!"
  continueButton.innerHTML = "Continue"
  answerOne.style.visibility = "hidden"
  answerTwo.style.visibility = "hidden"
  answerThree.style.visibility = "hidden"
  answerFour.style.visibility = "hidden"
  continueTwo.style.visibility = "hidden"




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

if (currentQuestion == [5]){
  endGame()
}
}

function checkAnswer(event) {

  if (event.target.innerHTML === Question[currentQuestion].Answer) {
    answerMessage.style.display = 'block';
    answerMessage.textContent = 'Correct!';
    window.setTimeout("closeAnswer();", 3000);
    answerMessage.className = 'answer-message';
    currentQuestion ++;
    secondsLeft += 5;
    scoreValue += 3;
    Score.textContent = "Your score: " + scoreValue
    //not working
   

    
  
  }else {
    currentQuestion ++;
    scoreValue -= 2;
    answerMessage.style.display = 'block';
    answerMessage.textContent = 'Incorrect!';
    window.setTimeout("closeAnswer();", 3000);
    answerMessage.className = 'answer-message';
    secondsLeft -= 5;
    Score.textContent = "Your score: " + scoreValue
    
  }
    
getQuestions()
console.log(scoreValue)

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

//storing score before last question
function endGame(){
  answerOne.style.visibility = "hidden"
  answerTwo.style.visibility = "hidden"
  answerThree.style.visibility = "hidden"
  answerFour.style.visibility = "hidden"
  var newScoreValue = []
  newScoreValue.push(scoreValue)
  localStorage.setItem("Score", JSON.stringify(newScoreValue));
continueTwo.style.visibility = "visible"
  continueButton.addEventListener("click", function(){ 
    href="index_score.html"
    




})}

function closeAnswer()
    {
        if (answerMessage != null)
            answerMessage.style.display = "none";
    }

