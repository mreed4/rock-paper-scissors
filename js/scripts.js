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

let domTotalRounds = document.querySelector("#total-rounds");
let domRoundsToPlay = document.querySelector("#rounds-left");
let domPlayerWins = document.querySelector("#player-wins");
let domComputerWins = document.querySelector("#computer-wins");
let domDraws = document.querySelector("#draws");
let domRoundOutcome = document.querySelector("#round-outcome");
let domPlayerRock = document.querySelector(".em-gem");
let domPlayerPaper = document.querySelector(".em-newspaper");
let domPlayerScissors = document.querySelector(".em-scissors");
let domVersus = document.querySelector("#versus");

// Set amount of times game played
let handsToPlay = 9;
domRoundsToPlay.textContent = String(handsToPlay);
domTotalRounds.textContent = String(handsToPlay);

// Initialize scores
let computerScore = 0;
let playerScore = 0;
let tie = 0;

let playerHand;

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

let computerHand = getComputerHand();

domPlayerRock.addEventListener("click", () => {
  handsToPlay--;
  domRoundsToPlay.textContent = String(handsToPlay);
  playerHand = "rock";
  playRound(playerHand, computerHand);
});

domPlayerPaper.addEventListener("click", () => {
  handsToPlay--;
  domRoundsToPlay.textContent = String(handsToPlay);
  playerHand = "paper";
  playRound(playerHand, computerHand);
});

domPlayerScissors.addEventListener("click", () => {
  handsToPlay--;
  domRoundsToPlay.textContent = String(handsToPlay);
  playerHand = "scissors";
  playRound(playerHand, computerHand);
});

// Get player choice
const getPlayerHand = () => {
  return playerHand;
};

// Play a round
const playRound = (playerHand, computerHand) => {
  playerHand = getPlayerHand(); // Get result from computer function
  computerHand = getComputerHand();

  // Set win/loss/tie messages
  let outcomeMessageLoss = "You lose this round!";
  let outcomeMessageWin = "You win this round!";
  let outcomeMessageTie = "Round tied!";
  let versus = `You: ${playerHand} v. Computer: ${computerHand}`;

  if (computerHand === playerHand) {
    tie++;
    domDraws.textContent = String(tie);
    domRoundOutcome.textContent = outcomeMessageTie;
    domVersus.textContent = String(versus);
  } else if (computerHand === "paper" && playerHand === "rock") {
    computerScore++;
    domComputerWins.textContent = String(computerScore);
    domRoundOutcome.textContent = outcomeMessageLoss;
    domVersus.textContent = String(versus);
  } else if (computerHand === "rock" && playerHand === "scissors") {
    computerScore++;
    domComputerWins.textContent = String(computerScore);
    domRoundOutcome.textContent = outcomeMessageLoss;
    domVersus.textContent = String(versus);
  } else if (computerHand === "scissors" && playerHand === "paper") {
    computerScore++;
    domComputerWins.textContent = String(computerScore);
    domRoundOutcome.textContent = outcomeMessageLoss;
    domVersus.textContent = String(versus);
  } else {
    playerScore++;
    domPlayerWins.textContent = String(playerScore);
    domRoundOutcome.textContent = outcomeMessageWin;
    domVersus.textContent = String(versus);
  }
};

if (playerScore > computerScore) {
}

// Reset game (and scores) after p seconds
const resetGame = () => {
  // Reset scores
  computerScore = 0;
  playerScore = 0;
  tie = 0;

  const p = 6; // Amount of seconds that pass

  // Log what is happening, what will happen
  console.warn("Resetting scores");

  // Clear console in p seconds
  console.warn(`Clearing console in ${p} seconds`);
  setTimeout(clearConsole, p * 1000);
};
