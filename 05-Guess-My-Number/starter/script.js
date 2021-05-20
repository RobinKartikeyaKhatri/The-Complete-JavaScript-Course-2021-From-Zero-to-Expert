'use strict';

// Creating random secret number
const secretNumber = Math.floor(Math.random() * 20 + 1);

let score = 20;

// Displaying secret number in HTML
document.querySelector('.number').textContent = secretNumber;

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
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";
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
