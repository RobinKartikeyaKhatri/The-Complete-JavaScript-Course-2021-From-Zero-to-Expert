'use strict';

// Selecting elements which are displaying user's score on DOM
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const rollDiceBtnEl = document.querySelector('.btn--roll');
const newGameBtnEl = document.querySelector('.btn--new');
const holdBtnEl = document.querySelector('.btn--hold');

let currentScore = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
rollDiceBtnEl.addEventListener('click', function () {
  //    1. Generate a random dice roll
  let dice = Math.floor(Math.random() * 6 + 1);

  //   2. Display the dice picture according to generated number
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `./dice-${dice}.png`);

  // 3.Check for rolled 1: if true,
  if (dice !== 1) {
    // Add dice to cuurent score
    currentScore += dice;
    current0El.textContent = currentScore; // Change later
  } else {
    // switch to next player
  }
});
