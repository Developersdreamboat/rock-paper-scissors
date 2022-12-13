"use strict"

let playerChoice;
let computerChoice;

let playerPoints = 0;
let computerPoints = 0;
let round;


function setComputerChoice() {
  let choice = getRandomInt(1, 3);
  if (choice === 1) {
    computerChoice = "rock";
  } else if (choice === 2) {
    computerChoice = "paper";
  } else if (choice === 3) {
    computerChoice = "scissors";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}


// rock < paper; rock > scissors
// paper > rock; paper < scissors
// scissors < rock; scissors > paper

//player 1 wins when 
//rock > scissors, paper > rock, scissors > paper

//player 2 wins when
//rock < paper, paper < scissors, scissors < rock


function enrollRound(caller) {
  let message;
  
  playerChoice = caller.id;
  setComputerChoice();
  
  if (playerChoice === computerChoice) {
    message = "Draw!";
  } else if (playerChoice == "rock" && 
             computerChoice == "scissors") {
    message = "Rock beats scissors. You won this round!";
    playerPoints += 1;
  } else if (playerChoice == "paper" &&
             computerChoice == "rock") {
    playerPoints += 1;
    message = "Paper beats rock. You won this round!";
  } else if (playerChoice == "scissors" &&
             computerChoice == "paper") {
    playerPoints += 1;
    message = "Scissors beat paper. You won this round!";
  } else if (computerChoice == "paper" &&
             playerChoice == "rock") {
    message = "Paper beats rock. You lost this round!";
    computerPoints += 1;
  } else if (computerChoice == "scissors" &&
             playerChoice == "paper") {
    computerPoints += 1;
    message = "Scissors beat paper. You lost this round!";
  } else if (computerChoice == "rock" &&
             playerChoice == "scissors") {
    computerPoints += 1;
    message = "Rock beats scissors. You lost this round!";
  }
  document.querySelector('#player-result').textContent = playerPoints;
  document.querySelector('#computer-result').textContent = computerPoints;
  document.querySelector('#round-result').textContent = message;
}

function playGame() {
  if (playerPoints != 5 && computerPoints != 5) {
    enrollRound(this);
    
    if (playerPoints == 5 || computerPoints == 5) {
      document.querySelector('.game').style.cssText = "display: none;";
      document.querySelector('.game-result').style.cssText = "display: block;";
      if (playerPoints == 5) {
      document.querySelector('.text-result')
        .textContent = "Congratulations! You outplayed the computer! Try again!";
      } else if (computerPoints == 5) {
      document.querySelector('.text-result')
        .textContent = "It`s a pity! You lost! Better luck next time!";
      }
    }
  }
}

function restartGame() {
  playerPoints = 0;
  computerPoints = 0;
  round = 0;
  
  document.querySelector('#player-result').textContent = playerPoints;
  document.querySelector('#computer-result').textContent = computerPoints;
  document.querySelector('#round-result').textContent = "";
  document.querySelector('.game').style.cssText = "display: block;";
  document.querySelector('.game-result').style.cssText = "display: none;";
}

const keys = Array.from(document.querySelectorAll(".choice > img"));
keys.forEach(key => key.addEventListener('click', playGame));

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click', restartGame);
