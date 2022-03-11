'use strict';

const drawSecretNumber = function () {
  return Math.floor(Math.random() * 20) + 1;
};

let secretNumber = drawSecretNumber();
let score = 20;
let highScore = 0;
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
    document.querySelector('.number').textContent = secretNumber;
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

const resetButton = document.querySelector('.again');
resetButton.addEventListener('click', () => {
  alert('hello world');
  // keep the highest score if it's better than current max score
  if (
    score > highScore &&
    secretNumber === Number(document.querySelector('.guess').value)
  ) {
    console.log(
      `replacing old highest score (${highScore}) with a new value (${score})`
    );
    highScore = score;
    document.querySelector('.highscore').innerHTML = highScore;
  }

  // draw a new secret number
  secretNumber = drawSecretNumber();
  console.log(`drawing new secret number ${secretNumber}`);

  // reset message
  message.textContent = 'Start guessing...';

  // restore background color
  document.querySelector('body').style.backgroundColor = '#222';

  // restore initial value of guess number to 10
  document.querySelector('.guess').value = 10;

  // restore the initial question mark
  document.querySelector('.number').textContent = '?';

  // reset score
  score = 20;
  document.querySelector('.score').textContent = 20;
  //
});
