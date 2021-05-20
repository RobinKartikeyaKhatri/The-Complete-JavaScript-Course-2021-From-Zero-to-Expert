'use strict';

// Creating random secret number
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
// Capturing the reference for 'Check' button
const checkButton = document.querySelector('.check');

// Adding an 'click' event listener to 'Check' button
checkButton.addEventListener('click', function () {
  // Grabbing value from input (input type is number)
  const guess = Number(document.querySelector('.guess').value);

  // Checking if there is no value inside input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge
/*

Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

*/

// Capturing the reference for 'Again' button
const againButton = document.querySelector(".again");

againButton.addEventListener("click", function() {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?"
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});