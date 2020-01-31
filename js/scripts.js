//Business Logic for Player 1

function Player1() {
  this.turnTotal = [];
  this.gameTotal = 0;
  this.currentRoll = [];
}

function Player2() {
  this.turnTotal = [];
  this.gameTotal = 0;
  this.currentRoll = [];
}

//ROLL button
function rollDice() {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  diceRoll2 = Math.floor(Math.random() * 6) + 1;
  var diceImages = new Array("img/dice1.jpg", "img/dice2.jpg", "img/dice3.jpg", "img/dice4.jpg", "img/dice5.jpg", "img/dice6.jpg");
  var img = diceImages[diceRoll - 1];
  var img2 = diceImages[diceRoll2 - 1];
  
  $("#dices").empty();
  var imgStr = '<img src="' + img + '" alt = "">';
  var imgStr2 = '<img src="' + img2 + '" alt = "">';
  
  $("#dices").append(imgStr, imgStr2);

  if ((diceRoll === 1 || diceRoll2 === 1) && currentPlayer === 1) {
    player1.turnTotal = [0];
    $(".result1").text("Player 1 Busts!");
    $(".result2").empty();
    currentPlayer = 2;
  } else if ((diceRoll === 1 || diceRoll2 === 1) && currentPlayer === 2) {
    player2.turnTotal = [0];
    $(".result2").text("Player 2 Busts!");
    $(".result1").empty();
    currentPlayer = 1;
  } else if (currentPlayer === 1) {
    $(".result1").append("<li>" + diceRoll + "&nbsp &nbsp &nbsp" + diceRoll2 + "</li>");
    $(".result2").empty();
    player1.turnTotal.push(diceRoll, diceRoll2);
  } else {
    player2.turnTotal.push(diceRoll, diceRoll2);
    $(".result1").empty();
    $(".result2").append("<li>" + diceRoll + "&nbsp &nbsp &nbsp" + diceRoll2 + "</li>");
    return 
  }
}

//HOLD button
function holdDice() {
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
    // rollDice.displayDice(diceRoll, diceRoll2);
    rollDice();
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    holdDice();
    $("#scoreTotal1").empty().text(player1.gameTotal);
    $("#scoreTotal2").empty().text(player2.gameTotal);
  });

});