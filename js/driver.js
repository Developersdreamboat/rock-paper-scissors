"use strict"

let playerPoints;
let round;

function getComputerChoice() {
  let choice = getRandomInt(1, 3);
  console.log(choice);
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else if (choice === 3) {
    return "scissors";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function getPlayerChoice() {
  let choice = prompt("Print rock, paper or scissors").toLowerCase();
  console.log(choice);
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
  } else {
        round -= 1;
        alert("Your input is not correct. Try again!");
        return 0;
  }
}

// rock < paper; rock > scissors
// paper > rock; paper < scissors
// scissors < rock; scissors > paper

//player 1 wins when 
//rock > scissors, paper > rock, scissors > paper

//player 2 wins when
//rock < paper, paper < scissors, scissors < rock


function playRound(playerSelection,
                   computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if ((playerSelection == "rock" && 
             computerSelection == "scissors") ||
             (playerSelection == "paper" &&
             computerSelection == "rock") ||
             (playerSelection == "scissors" &&
             computerSelection == "paper")) {
    return 1;
  } else {
    return -1;
  }
}

function resetGame() {
  playerPoints = 0;
  round = 0;
}

function game() {
  for (round = 1; round <= 5; round++) {
    playerPoints += playRound(getPlayerChoice(), getComputerChoice());
  }
  if (playerPoints > 0) {
    alert("You won!");
  } else if (playerPoints === 0) {
    alert("Draw!");
  } else if (playerPoints < 0) {
    alert("You lost!");
  }
}

while (true) {
  resetGame();
  game();
}
