var body = document.body;
var highscoreInput = document.querySelector("#highscore-text");
var highscoreForm = document.querySelector("#highscore-form");
var highscoreList = document.querySelector("#highscore-list");
var highscoreCount = document.querySelector("#highscore-count");
var highscores = [];
var storedScore = JSON.parse(localStorage.getItem("Score"));
var showScore = document.getElementById("HighScore")
showScore.textContent = "Your score is " + storedScore + "!";

getStoredName();

function getHighScores() {
  highscoreList.innerHTML = "";
  highscoreCount.textContent = "";
  for (var i = 0; i < highscores.length; i++) {
    var ml = highscores[i];
    var li = document.createElement("li");
    li.textContent = ml;
    li.setAttribute("data-index", i);
    li.style.listStyleType = "none"

    var button = document.createElement("button");
    button.textContent = "Delete";

    li.appendChild(button);
    highscoreList.appendChild(li);
  }
}

function getStoredName() {
  var mxq = JSON.parse(localStorage.getItem("name"));
  if (mxq !== null) {
    highscores = mxq;
  }
  getHighScores();
}

function storeHighScores() {

  localStorage.setItem("name", JSON.stringify(highscores));
}

highscoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = (highscoreInput.value.trim()) + "'s score is: " + storedScore;

  if (todoText === "") {
    return;
  }
  highscores.push(todoText);
  highscoreInput.value = "";
  storeHighScores();
  getHighScores();
});

highscoreList.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    highscores.splice(index, 1);
    storeHighScores();
    getHighScores();
  }
});




