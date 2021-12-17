// Variables:
var boxesArray = document.querySelectorAll(".box");
var gamesMemory = [];
var gameIsOn = false;
var playerRepeats = false;
var gameStarted = false;
var count = 0;
var score = 0;
var highScore = 0;
var level = 0;


// Sounds:
var gameOverSound = new Audio("sounds/game-over.wav");
var sounds = [new Audio("sounds/button-1.wav"),
  new Audio("sounds/button-2.wav"),
  new Audio("sounds/button-3.wav"),
  new Audio("sounds/button-4.wav"),
];

// JS Media Query:
var x = window.matchMedia("(max-width: 860px)");
if (x.matches) {
  document.querySelector(".start-button").classList.remove("display-none");
  document.querySelector(".instruction").classList.add("display-none");
  document.querySelector(".start-button").addEventListener("click", doWhenKeyDown);
}

// Click eventListeners:
for (let i = 0; i < 4; i++) {
  boxesArray[i].addEventListener("click", doWhenClicked);

  function doWhenClicked() {
    if (gameIsOn === true && gameStarted === true) {
      sounds[i].play();

      if (gamesMemory[count] !== i) {
        gameIsOn = false;
        playerRepeats = false;
        gamesMemory = [];
        document.querySelector(".restart").textContent = "Game Over!";
        document.querySelector(".instruction").style.visibility = "visible";
        if (x.matches) {
          document.querySelector(".start-button").classList.remove("display-none");
        }

        if (highScore < score) {
          highScore = score;
          document.querySelector(".high-score").innerHTML = "High Score: <br>" + highScore;
        }

        document.querySelector("body").classList.add("game-over");
        setTimeout(function() {
          document.querySelector("body").classList.remove("game-over");
        }, 300);
        gameOverSound.play();
        score = 0;
        count = 0;
        document.querySelector(".score").innerHTML = "Score: <br>" + score;

      } else {
        count++;
        if (count === gamesMemory.length) {
          score = score + count;
          document.querySelector(".score").innerHTML = "Score: <br>" + score;
          document.querySelector(".restart").textContent = "Level: " + count;
          playerRepeats = true;

          var randomNumber = Math.floor(Math.random() * 4);
          var randomTime = Math.floor(Math.random() * 600 + 800);
          setTimeout(function() {
            boxesArray[randomNumber].classList.add("animation-2");
            sounds[randomNumber].play();
            gamesMemory.push(randomNumber);
          }, randomTime);
          setTimeout(function() {
            boxesArray[randomNumber].classList.remove("animation-2");
          }, randomTime + 200);

          console.log("boxes player should click next:" + gamesMemory + randomNumber);
          count = 0;
        }
        boxesArray[i].classList.add("animation");
        setTimeout(function() {
          boxesArray[i].classList.remove("animation");
        }, 150);
      }
    } else if (gameIsOn === false && gameStarted === true) {
      document.querySelector(".instruction").style.visibility = "visible";
      document.querySelector(".restart").textContent = "Game Over!";
    }
  }
}

// Keydown eventListener:
document.addEventListener("keydown", doWhenKeyDown);

function doWhenKeyDown(event) {
  if (gameIsOn === false) {
    document.querySelector(".start-button").classList.add("display-none");
    gameIsOn = true;
    gameStarted = true;
    var randomNumber = Math.floor(Math.random() * 4);
    boxesArray[randomNumber].classList.add("animation-2");
    setTimeout(function() {
      boxesArray[randomNumber].classList.remove("animation-2");
    }, 150);
    document.querySelector(".restart").textContent = "Level: " + count;
    document.querySelector(".instruction").style.visibility = "hidden";
    gamesMemory.push(randomNumber);
    playerRepeats = true;
    sounds[randomNumber].play();
  }
}
