'use strict';

// Selecting elements which are displaying user's score on DOM
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const rollDiceBtnEl = document.querySelector('.btn--roll');
const newGameBtnEl = document.querySelector('.btn--new');
const holdBtnEl = document.querySelector('.btn--hold');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
