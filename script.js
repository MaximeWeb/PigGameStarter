const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer1 = document.querySelector('#current--0');
const currentPlayer2 = document.querySelector('#current--1');
const PlayerColor1 = document.querySelector('.player--0');
const PlayerColor2 = document.querySelector('.player--1');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let currentScore = 0;
let currentPlayer = false;
let playing = true;

const switchColor = () => {
  PlayerColor1.classList.toggle('player--active');
  PlayerColor2.classList.toggle('player--active');
};

const init = () => {
  currentScore = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  currentPlayer = false;
  PlayerColor1.classList.toggle('player--active');
  PlayerColor2.classList.remove('player--active');
};

const switchPlayer = () => {
  currentPlayer = !currentPlayer;
};

dice.classList.add('hidden');
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;

roll.addEventListener('click', () => {
  const calcul = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${calcul}.png`;
  dice.classList.remove('hidden');

  if (!currentPlayer) {
    if (calcul !== 1) {
      currentScore += calcul;
      currentPlayer1.textContent = currentScore;
      if (currentScore >= 30) {
        alert('You win');
        init();
      }
    } else if (calcul === 1) {
      currentPlayer1.textContent = 0;
      currentScore = 0;
      switchPlayer();
      switchColor();
    }
  } else {
    if (calcul !== 1) {
      currentScore += calcul;
      currentPlayer2.textContent = currentScore;
      if (currentScore >= 30) {
        alert('You win');
        init();
      }
    } else if (calcul === 1) {
      currentPlayer2.textContent = 0;
      currentScore = 0;
      switchPlayer();
      switchColor();
    }
  }
});

hold.addEventListener('click', () => {
  if (!currentPlayer) {
    scorePlayer1.textContent =
      currentScore + parseInt(scorePlayer1.textContent);
    currentPlayer1.textContent = 0;
    currentScore = 0;
    switchPlayer();
    switchColor();
  } else {
    scorePlayer2.textContent =
      currentScore + parseInt(scorePlayer2.textContent);
    currentPlayer1.textContent = 0;
    currentScore = 0;
    switchPlayer();
    switchColor();
  }
});

document.querySelector('.btn--new').addEventListener('click', () => {
  init();
});
