# Pig Latin
## Specs:

* Behavior: When user clicks on the ROLL button, they recieve a random number
  * Input: Click ROLL button
  * Output: *displays random number between 1-6*

* Behavior: When user clicks on the HOLD button, it will add their total for that round.
  * Input: Click HOLD button, current score total is 1, 2, 3.
  * Output: "1 + 2 + 3 = 6"

* Behavior: When user clicks on the HOLD button, the turn passes to the other player.
  * Input: Click HOLD button
  * Output: Turn passes to other player

* Behavior: When user clicks on the ROLL button and the result is "1", the total score output of that turn is "0" regardless of past roll results of that turn.
  * Input: "4, 5, 6, 1"
  * Output: "0"

* Behavior: When user rolls a "1", the turn passes to the other player.
  * Input: "4, 5, 6, 1"
  * Output: Turn passes to other player

* Behavior: When one user hits 100 points, an alert will appear that that player has won:
  * Input: "100"
  * Output: Alert(You win!)



