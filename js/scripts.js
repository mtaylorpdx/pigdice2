// Business Logic for ROLL button

// function rollDice() {
//   Math.floor(Math.random() * 6) + 1;
// }



//User Interface for ROLL

$(document).ready(function() {
  $("#roll1").click(function(event) {
      var diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
  });
});