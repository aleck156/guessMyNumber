'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

let message = document.querySelector('.message');
// document.querySelector('.score').textContent = 10;

// for input fields, we use .value instead of .textContent
document.querySelector('.guess').value = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').innerHTML = 'Not a number!';
  } else if (guess === secretNumber) {
    message.textContent = `You're right!`;
    score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too damn high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = `You've lost the game!`;
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = `You've lost the game!`;
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
