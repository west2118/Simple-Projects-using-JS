const startDisplay = document.querySelector('.container-starter');
const playWithComputer = document.querySelector('.play-computer');
const pickDisplay = document.querySelector('.container-game');
const resultDisplay = document.querySelector('.container-game-picked');
const buttonChoice = document.querySelectorAll('.btn-choices');
const winnerDisplay = document.querySelector('.win');
let playerScoreDisplay = document.querySelector('.player-score2');
let computerScoreDisplay = document.querySelector('.computer-score2');
const playAgain = document.querySelector('.play-again');
const resetScore = document.querySelector('.reset-score');

let playerScore = 0;
let computerScore = 0;

const choices = ['paper', 'rock', 'scissors'];
const imgPaths = {
  paper: 'img-1.png',
  rock: 'img-2.png',
  scissors: 'img-3.png',
};

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function start() {
  document.querySelector('.player-score').innerText = playerScore;
  document.querySelector('.computer-score').innerText = computerScore;

  startDisplay.classList.add('hidden');
  pickDisplay.classList.remove('hidden');
}

function updatedScore(winner) {
  if (winner === 'player') {
    playerScore++;
    winnerDisplay.innerHTML = 'Player Wins';
  } else if (winner === 'computer') {
    computerScore++;
    winnerDisplay.innerHTML = 'Computer Wins';
  } else {
    winnerDisplay.innerHTML = 'Draw';
  }

  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
}

function play(playerChoice) {
  const computerPick = computerChoice();
  const playerResult = document.querySelector('.player-result');
  const computerResult = document.querySelector('.computer-result');

  playerResult.src = imgPaths[playerChoice];
  computerResult.src = imgPaths[computerPick];

  if (playerChoice === computerPick) {
    updatedScore('tie');
  } else if (
    (playerChoice === 'rock' && computerPick === 'scissors') ||
    (playerChoice === 'paper' && computerPick === 'rock') ||
    (playerChoice === 'scissors' && computerPick === 'paper')
  ) {
    updatedScore('player');
  } else {
    updatedScore('computer');
  }
}

buttonChoice.forEach(btn => {
  btn.addEventListener('click', () => {
    const playerChoice = btn.classList[0];
    play(playerChoice);

    pickDisplay.classList.add('hidden');
    resultDisplay.classList.remove('hidden');
  });
});

playWithComputer.addEventListener('click', start);

playAgain.addEventListener('click', function () {
  resultDisplay.classList.add('hidden');

  start();
});

resetScore.addEventListener('click', function () {
  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
});
