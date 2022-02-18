/*
rockPaperScissors.js
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

We’re going to make a simple implementation of grade-school classic “rock paper 
scissors”. If you don’t know what that is check the Wikipedia article or this 
ridiculous step-by-step. For the moment we’re just going to play the game from the 
browser console, but we will revisit this project in a later lesson and add a 
Graphical User Interface with buttons and text, so don’t forget to keep the code 
on GitHub! You might notice some ‘Live Preview’ links in the student solutions that 
have a GUI - this is coming in a later lesson. When you get there don’t forget to 
come back and add your link!
*/

// Set all DOM elements
let domBody = document.body;
let domScoreToWin = document.querySelector("#score-to-win");
let domGameOutcome = document.querySelector("#game-outcome");
let domRoundOutcome = document.querySelector("#round-outcome");
let domBtnPlayAgain = document.querySelector("#btn-again");

// Sections
let domDesc = document.querySelector("#description");
let domHands = document.querySelector("#hands");
let domRoundResults = document.querySelector("#results-round"); // CSS - visibility: hidden;
let domGameResults = document.querySelector("#results-game"); // CSS - display: none;

// Computer choice div
let domComputerChoice = document.querySelector("#computer-choice");

// Each player choices
let domPlayerRock = document.querySelector(".em-gem");
let domPlayerPaper = document.querySelector(".em-newspaper");
let domPlayerScissors = document.querySelector(".em-scissors");

// Stats
let domRoundsPlayed = document.querySelector("#rounds-played");
let domPlayerWins = document.querySelector("#player-wins");
let domComputerWins = document.querySelector("#computer-wins");
let domDraws = document.querySelector("#draws");

// Initialize rounds
let scoreToWin = 5;
let roundsPlayed = 0;

// Place the numbers into the DOM
domRoundsPlayed.textContent = roundsPlayed;
domScoreToWin.textContent = scoreToWin;

// Initialize scores, hands
let computerScore = 0;
let playerScore = 0;
let draws = 0;
let computerHand; // See getComputerHand()
let playerHand; // See event listeners farther below

// Get computer choice
const getComputerHand = () => {
  let n = Math.floor(Math.random() * 3);
  switch (n) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return null;
  }
};

// Get player choice - See event listeners farther below
const getPlayerHand = () => {
  return playerHand;
};

// Updates rounds played in DOM, pits player against computer
// See event listeners farther below
const updateStats = (playerChoice) => {
  roundsPlayed++;
  domRoundsPlayed.textContent = roundsPlayed;
  playerHand = playerChoice;
  playRound(playerHand, computerHand); // Compare hands
};

// Reveals the computer's hand in DOM
const showComputerHand = (computerHand) => {
  if (computerHand === "paper") {
    domComputerChoice.innerHTML = "<i class='em larger em-newspaper animate-pop'></i>";
  } else if (computerHand === "rock") {
    domComputerChoice.innerHTML = "<i class='em larger em-gem animate-pop'></i>";
  } else {
    domComputerChoice.innerHTML = "<i class='em larger em-scissors animate-pop'></i>";
  }
};

// Updates stats in DOM after a round, displays winner of round
// 2/17/22 - Currently unused, not working
const updateStatsAfterRound = (roundWinner, message, msgColor) => {
  roundWinner++;
  domDraws.textContent = roundWinner;
  domRoundOutcome.textContent = message;
  domRoundOutcome.style.cssText = `visibility: visible; color: var(--${msgColor})`;
  showComputerHand(computerHand);
};

// Plays a round
const playRound = (playerHand, computerHand) => {
  playerHand = getPlayerHand();
  computerHand = getComputerHand();

  let outcomeMessageLoss = "You lose this round!";
  let outcomeMessageWin = "You win this round!";
  let outcomeMessageTie = "Round tied!";

  if (computerHand === playerHand) {
    // updateStatsAfterRound(draws, outcomeMessageTie, "yellow");
    draws++;
    domDraws.textContent = draws;
    domRoundOutcome.textContent = outcomeMessageTie;
    domRoundOutcome.style.cssText = "visibility: visible; color: var(--yellow)";
    showComputerHand(computerHand);
  } else if (
    (computerHand === "paper" && playerHand === "rock") ||
    (computerHand === "rock" && playerHand === "scissors") ||
    (computerHand === "scissors" && playerHand === "paper")
  ) {
    // updateStatsAfterRound(computerScore, outcomeMessageLoss, "red");
    computerScore++;
    domComputerWins.textContent = computerScore;
    domRoundOutcome.textContent = outcomeMessageLoss;
    domRoundOutcome.style.cssText = "visibility: visible; color: var(--red)";
    showComputerHand(computerHand);
  } else {
    // updateStatsAfterRound(playerScore, outcomeMessageWin, "green");
    playerScore++;
    domPlayerWins.textContent = playerScore;
    domRoundOutcome.textContent = outcomeMessageWin;
    domRoundOutcome.style.cssText = "visibility: visible; color: var(--green)";
    showComputerHand(computerHand);
  }
  determineWinner(playerScore, computerScore);
};

// Shows winner of overall game in DOM
const showGameResults = (gameWinner, bgColor) => {
  domHands.style.display = "none";
  domDesc.style.display = "none";
  domRoundResults.style.display = "none";
  domGameResults.style.display = "block";
  domBtnPlayAgain.style.visibility = "visible";
  domGameOutcome.textContent = `${gameWinner} wins the game!`;
  domBody.style.backgroundColor = `var(--${bgColor})`;
};

// Logic to determine game winner
const determineWinner = (playerScore, computerScore) => {
  if (playerScore === scoreToWin) {
    showGameResults("Player", "green");
  } else if (computerScore === scoreToWin) {
    showGameResults("Computer", "red");
  }
};

// Reset game (and scores)
const playAgain = () => {
  // Reset scores
  computerScore = 0;
  playerScore = 0;
  draws = 0;
  roundsPlayed = 0;

  // Reset all DOM elements
  domRoundsPlayed.textContent = roundsPlayed;
  domPlayerWins.textContent = playerScore;
  domComputerWins.textContent = computerScore;
  domDraws.textContent = draws;
  domBody.style.backgroundColor = "hsla(216, 18.1%, 16.3%, 1)";
  domDesc.style.display = "block";
  domHands.style.display = "flex";
  domGameResults.style.display = "none";
  domRoundResults.style.cssText = "display: block; visibility: hidden";
  domRoundOutcome.style.visibility = "hidden";
  domBtnPlayAgain.style.visibility = "hidden";
  domComputerChoice.innerHTML = "<i class='em larger em-question'></i>";
};

// Event listeners
domPlayerRock.addEventListener("click", () => {
  updateStats("rock");
});

domPlayerPaper.addEventListener("click", () => {
  updateStats("paper");
});

domPlayerScissors.addEventListener("click", () => {
  updateStats("scissors");
});

domBtnPlayAgain.addEventListener("click", () => {
  playAgain();
});
