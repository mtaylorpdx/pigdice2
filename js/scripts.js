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
  // var diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  // var dice1 = ("img/dice1.jpg");
  // var dice2 = ("img/dice2.jpg");
  // var dice3 = ("img/dice3.jpg");
  // var dice4 = ("img/dice4.jpg");
  // var dice5 = ("img/dice5.jpg");
  // var dice6 = ("img/dice6.jpg");
  var diceImages = new Array("img/dice1.jpg", "img/dice2.jpg", "img/dice3.jpg", "img/dice4.jpg", "img/dice5.jpg", "img/dice6.jpg");
  var img = diceImages[diceRoll - 1];
  var img2 = diceImages[diceRoll2 - 1];
  
  $("#dices").empty();
  var imgStr = '<img src="' + img + '" alt = "">';
  var imgStr2 = '<img src="' + img2 + '" alt = "">';
  
  console.log(imgStr);
  console.log(imgStr2);
  // document.getElementById("#dices").append(imgStr);

  $("#dices").append(imgStr, imgStr2);
  // $("#dices").append(imgStr2);

  console.log(diceRoll)
  console.log(diceRoll2)
  if ((diceRoll === 1 || diceRoll2 === 1) && currentPlayer === 1) {
    player1.turnTotal = [0];
    $(".result1").text("Player 1 Busts!");
    $(".result2").empty();
    currentPlayer = 2;
    console.log("turn over");
  } else if ((diceRoll === 1 || diceRoll2 === 1) && currentPlayer === 2) {
    player2.turnTotal = [0];
    $(".result2").text("Player 2 Busts!");
    $(".result1").empty();
    currentPlayer = 1;
    console.log("turn over");
  } else if (currentPlayer === 1) {
    $(".result1").append("<li>" + diceRoll + " " + diceRoll2 + "</li>");
    $(".result2").empty();
    player1.turnTotal.push(diceRoll, diceRoll2);
  } else {
    player2.turnTotal.push(diceRoll, diceRoll2);
    $(".result1").empty();
    $(".result2").append("<li>" + diceRoll + " " + diceRoll2 + "</li>");
    return 
  }
}

// rollDice.prototype.displayDice = function(diceRoll, diceRoll2) {
//   var diceRoll = diceRoll;
//   var diceRoll2 = diceRoll2;
//   $("#" + diceRoll).show();
//   $("#" + diceRoll2).show();
// }



//HOLD button
function holdDice() {
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
    // rollDice.displayDice(diceRoll, diceRoll2);
    rollDice();
  
    console.log(player1.turnTotal);
    console.log(player2.turnTotal);
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    holdDice();
    $("#scoreTotal1").empty().text(player1.gameTotal);
    $("#scoreTotal2").empty().text(player2.gameTotal);
    console.log(player1.gameTotal);
    console.log(player2.gameTotal);
  });

});