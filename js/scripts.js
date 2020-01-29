// Business Logic for ROLL button
function Player1() {
  this.turnTotal = [];
  this.gameTotal = 0;
}

function rollDice() {
  var diceRoll = 0;
  diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll)
  if (diceRoll === 1) {
    player1.turnTotal = [0];
    console.log("turn over");
  } else {
      player1.turnTotal.push(diceRoll);

    return 
  }
}

function holdDice() {
  console.log(player1.turnTotal);
  player1.turnTotal.forEach(function(roll) {
    console.log(roll);
    player1.gameTotal = player1.gameTotal + roll;
  });
  player1.turnTotal = [];
}



//User Interface for ROLL
var player1 = new Player1();

$(document).ready(function() {

  $("#roll1").click(function(event) {
    event.preventDefault();
    rollDice();
    console.log(player1.turnTotal);
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    holdDice();
    console.log(player1.gameTotal);
  });
});