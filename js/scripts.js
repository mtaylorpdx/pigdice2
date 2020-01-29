// Business Logic for ROLL button

function Player1(turnTotal, gameTotal) {
  this.turnTotal = [];
  this.gameTotal = [gameTotal];
}

function rollDice() {
  var diceRoll = 0;
  diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll)
  if (diceRoll === 1) {
    player1.turnTotal = [parseInt("0")];
    console.log("turn over");
  } else {
      player1.turnTotal.push(diceRoll);
    return
  }
}



//User Interface for ROLL
var player1 = new Player1();

$(document).ready(function() {

  $("#roll1").click(function(event) {

    rollDice();
    console.log(player1.turnTotal)
  });
});