//Business Logic for Player 1

function Player1() {
  this.turnTotal = [];
  this.gameTotal = 0;
}

function Player2() {
  this.turnTotal = [];
  this.gameTotal = 0;
}

//ROLL button
function rollDice1() {
  var diceRoll = 0;
  diceRoll = Math.floor(Math.random() * 6) + 1;
  console.log(diceRoll)
  if (diceRoll === 1 && currentPlayer === 1) {
    player1.turnTotal = [0];
    $(".result1").text("Player 1 Busts!");
    $(".result2").empty();
    currentPlayer = 2;
    console.log("turn over");
  } else if (diceRoll === 1 && currentPlayer === 2) {
    player2.turnTotal = [0];
    $(".result2").text("Player 2 Busts!");
    $(".result1").empty();
    currentPlayer = 1;
    console.log("turn over");
  } else if (currentPlayer === 1) {
    $(".result1").append("<li>" + diceRoll + "</li>");
    $(".result2").empty();
    player1.turnTotal.push(diceRoll);
  } else {
    player2.turnTotal.push(diceRoll);
    $(".result1").empty();
    $(".result2").append("<li>" + diceRoll + "</li>");
    return 
  }
}
//HOLD button
function holdDice1() {
  console.log(player1.turnTotal);
  if (currentPlayer === 1) {
    player1.turnTotal.forEach(function(roll) {
      player1.gameTotal = player1.gameTotal + roll;
      currentPlayer = 2;
    });
  } else {
    player2.turnTotal.forEach(function(roll) {
      player2.gameTotal = player2.gameTotal + roll;
      currentPlayer = 1;
    });
  } 
    player1.turnTotal = [];
    player2.turnTotal = [];
  if (player1.gameTotal >= 100) {
    alert ("Player 1 Wins!");
  } else if (player2.gameTotal >= 100){
    alert ("Player 2 Wins!");
  }
}



//User Interface for ROLL & HOLD

var player1 = new Player1();
var player2 = new Player2();
var currentPlayer = 1


$(document).ready(function() {

  $("#roll1").click(function(event) {
    event.preventDefault();
    rollDice1();

    console.log(player1.turnTotal);
    console.log(player2.turnTotal);
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    holdDice1();
    $("#scoreTotal1").empty().text(player1.gameTotal);
    $("#scoreTotal2").empty().text(player2.gameTotal);
    console.log(player1.gameTotal);
    console.log(player2.gameTotal);
  });

});