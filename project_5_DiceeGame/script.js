
var randomPlayer1 = Math.floor(Math.random()*6 + 1);
var randomPlayer2 = Math.floor(Math.random()*6 + 1);

var player1DiceID = "dice-" + randomPlayer1;
var player2DiceID = "player-2-dice-" + randomPlayer2;

document.getElementById(player1DiceID).classList.toggle("dice-hidden");
document.getElementById(player2DiceID).classList.toggle("dice-hidden");

var heading = document.getElementsByClassName("head-title")[0];

if(randomPlayer1 > randomPlayer2){
  heading.textContent = "Player 1 has won!";
} else if( randomPlayer2 > randomPlayer1){
  heading.textContent = "Player 2 has won!";
} else {
  heading.textContent = "Draw!";
}
