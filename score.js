var body = document.body;
var highscoreInput = document.querySelector("#highscore-text");
var highscoreForm = document.querySelector("#highscore-form");
var highscoreList = document.querySelector("#highscore-list");
var highscores = [];
var storedScore = JSON.parse(localStorage.getItem("Score"));
var showScore = document.getElementById("HighScore")
showScore.textContent = "Your score is " + storedScore + "!";

getStoredName();

function getStoredName() {
  var name = JSON.parse(localStorage.getItem("name"));
  if (name !== null) {
    highscores = name;
  }
  getHighScores();
}

function getHighScores() {
  highscoreList.innerHTML = "";
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


function storeHighScores() {
  localStorage.setItem("name", JSON.stringify(highscores));
}

highscoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var scoreText = (highscoreInput.value.trim()) + "'s score is: " + storedScore;

 
  highscores.push(scoreText);
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