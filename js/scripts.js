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
let domGameOutcome = document.querySelector("#game-outcome");
let domPlayerChoices = document.querySelector("#player-choices");
let domComputerChoice = document.querySelector("#computer-choice");
let domBtnPlayAgain = document.querySelector("#btn-again");
let domHands = document.querySelector("#hands");
let domRoundResults = document.querySelector("#results-round");
let domGameResults = document.querySelector("#results-game");
let domDesc = document.querySelector("#description");

let roundOutcomeText = "[Results of each round will show up here]";
let gameOutcomeText = "Outcome of game will appear here";
let versusTest = "Each hand will show up here";

domGameResults.style.display = "none";

domRoundOutcome.textContent = roundOutcomeText;
domRoundResults.style.cssText = "visibility: hidden";

domVersus.textContent = versusTest;
domVersus.style.cssText = "visibility: hidden";

domGameOutcome.textContent = gameOutcomeText;

// Set amount of times game played
let handsToPlay = 5;
let saveHands = handsToPlay;

// Place the number into the DOM
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

let computerHand = getComputerHand();
let playerHand;

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
  playerHand = getPlayerHand();
  computerHand = getComputerHand();

  // Set win/loss/tie messages
  let outcomeMessageLoss = "You lose this round!";
  let outcomeMessageWin = "You win this round!";
  let outcomeMessageTie = "Round tied!";
  let versus = `${playerHand} versus ${computerHand}`;

  if (computerHand === playerHand) {
    tie++;
    domDraws.textContent = String(tie);
    domRoundOutcome.textContent = outcomeMessageTie;
    domRoundOutcome.style.cssText = "visibility:visible;color:var(--yellow)";
    domVersus.textContent = String(versus);
    domVersus.style.visibility = "visible";

    if (computerHand === "paper") {
      domComputerChoice.innerHTML = "<i class='em larger em-newspaper'></i>";
    } else if (computerHand === "rock") {
      domComputerChoice.innerHTML = "<i class='em larger em-gem'></i>";
    } else {
      domComputerChoice.innerHTML = "<i class='em larger em-scissors'></i>";
    }
  } else if (
    (computerHand === "paper" && playerHand === "rock") ||
    (computerHand === "rock" && playerHand === "scissors") ||
    (computerHand === "scissors" && playerHand === "paper")
  ) {
    computerScore++;
    domComputerWins.textContent = String(computerScore);
    domRoundOutcome.textContent = outcomeMessageLoss;
    domRoundOutcome.style.cssText = "visibility:visible;color:var(--red)";
    domVersus.textContent = String(versus);
    domVersus.style.visibility = "visible";
    if (computerHand === "paper") {
      domComputerChoice.innerHTML = "<i class='em larger em-newspaper'></i>";
    } else if (computerHand === "rock") {
      domComputerChoice.innerHTML = "<i class='em larger em-gem'></i>";
    } else {
      domComputerChoice.innerHTML = "<i class='em larger em-scissors'></i>";
    }
  } else {
    playerScore++;
    domPlayerWins.textContent = String(playerScore);
    domRoundOutcome.textContent = outcomeMessageWin;
    domRoundOutcome.style.cssText = "visibility:visible;color:var(--green)";
    domVersus.textContent = String(versus);
    domVersus.style.visibility = "visible";

    if (computerHand === "paper") {
      domComputerChoice.innerHTML = "<i class='em larger em-newspaper'></i>";
    } else if (computerHand === "rock") {
      domComputerChoice.innerHTML = "<i class='em larger em-gem'></i>";
    } else {
      domComputerChoice.innerHTML = "<i class='em larger em-scissors'></i>";
    }
  }
  determineWinner(tie, playerScore, computerScore, handsToPlay);
};

const determineWinner = (tie, playerScore, computerScore, handsToPlay) => {
  if (tie + playerScore + computerScore === saveHands) {
    domHands.style.display = "none";
    domDesc.style.display = "none";
    domGameResults.style.display = "block";
    domBtnPlayAgain.style.visibility = "visible";

    domRoundResults.style.cssText = "display: none;";
    domVersus.style.cssText = "display: none;";
  }
  if (handsToPlay === 0 && playerScore > computerScore) {
    domBody.style.backgroundColor = "var(--green)";
    domGameOutcome.textContent = "Player wins the game!";
  } else if (handsToPlay === 0 && playerScore < computerScore) {
    domBody.style.backgroundColor = "var(--red)";
    domGameOutcome.textContent = "Computer wins the game!";
  } else if (handsToPlay === 0 && playerScore === computerScore) {
    domBody.style.backgroundColor = "var(--yellow)";
    domGameOutcome.textContent = "Game results in draw!";
    domGameOutcome.style.color = "var(--darker)";
  }
};

// Reset game (and scores) after p seconds
const playAgain = () => {
  // Reset scores
  computerScore = 0;
  playerScore = 0;
  tie = 0;
  handsToPlay = saveHands;

  domPlayerWins.textContent = String(playerScore);
  domRoundsToPlay.textContent = String(saveHands);
  domComputerWins.textContent = String(computerScore);
  domDraws.textContent = String(tie);

  domBody.style.backgroundColor = "hsla(216, 18.1%, 16.3%, 1)";

  domRoundResults.style.cssText = "display: block; visibility: hidden;";
  domVersus.style.cssText = "display: block; visibility: hidden;";

  domHands.style.display = "flex";
  domDesc.style.display = "block";
  domGameResults.style.display = "none";

  domGameOutcome.textContent = gameOutcomeText;

  domRoundOutcome.textContent = roundOutcomeText;
  domRoundOutcome.style.color = "var(--light)";

  domVersus.textContent = versusTest;

  domBtnPlayAgain.style.visibility = "hidden";

  domComputerChoice.innerHTML = "<i class='em larger em-question'></i>";
};

domBtnPlayAgain.addEventListener("click", () => {
  playAgain();
});
