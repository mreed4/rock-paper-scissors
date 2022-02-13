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
let domPlayerRock = document.querySelector(".em-gem");
let domPlayerPaper = document.querySelector(".em-newspaper");
let domPlayerScissors = document.querySelector(".em-scissors");

// Set amount of times game played
let handsToPlay = 9;
domRoundsToPlay.textContent = String(handsToPlay);
domTotalRounds.textContent = String(handsToPlay);

// Initialize scores
let computerScore = 0;
let playerScore = 0;
let tie = 0;

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

// Get player choice
const getPlayerHand = () => {};

// Play a round
const playRound = (playerHand, computerHand) => {
  playerHand = getPlayerHand(); // Get result from computer function
  computerHand = getComputerHand(); // Get result from player function

  // Set win/loss/tie messages
  const outcomeMessageLoss = "You lose this round!";
  const outcomeMessageWin = "You win this round!";
  const outcomeMessageTie = "Round tied!";

  if (computerHand === playerHand) {
    tie++;
    return outcomeMessageTie;
  } else if (computerHand === "paper" && playerHand === "rock") {
    computerScore++;
    return outcomeMessageLoss;
  } else if (computerHand === "rock" && playerHand === "scissors") {
    computerScore++;
    return outcomeMessageLoss;
  } else if (computerHand === "scissors" && playerHand === "paper") {
    computerScore++;
    return outcomeMessageLoss;
  } else {
    playerScore++;
    return outcomeMessageWin;
  }
};

// Play game n rounds, log score at time of each round
const playGame = (n) => {
  // Play though n times
  for (let i = 1; i <= handsToPlay; i++) {
    console.log(`Round ${i}: ${playRound()}`);
    console.info(`%cCurrent score: ${computerScore} to ${playerScore} (${tie} ties)`, consoleStyleContext);
  }

  // Call function that logs who won the game (the set of rounds)
  gameResults();
  // resetGame();
};

// Declare winner after all rounds played
const gameResults = () => {
  if (computerScore === playerScore) {
    console.log(`%cTied game! %c[${computerScore} to ${playerScore} (${tie} ties)]`, consoleStyleTie, consoleStyleContext);
  } else if (playerScore === handsToPlay) {
    console.log(`%cPerfect game!`, consoleStylePerfect);
  } else if (computerScore > playerScore) {
    console.log(`%cComputer wins the game! %c[${computerScore} to ${playerScore} (${tie} ties)]`, consoleStyleLoss, consoleStyleContext);
  } else {
    console.log(`%cPlayer wins the game! %c[${playerScore} to ${computerScore} (${tie} ties)]`, consoleStyleWin, consoleStyleContext);
  }
};

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

// This clears the console
const clearConsole = () => {
  console.clear();
};
