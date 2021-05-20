'use strict';

// const message = document.querySelector('.message');

// message.textContent = '🎉 Correct Number';

// const number = document.querySelector(".number");
// number.textContent = 13;

// const score = document.querySelector(".score");
// score.textContent = 10;

// const guess = document.querySelector(".guess");
// console.log(guess.value);

// guess.value = 23;
// console.log(guess.value);

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
