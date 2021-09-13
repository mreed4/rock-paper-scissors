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



// Get computer choice
const getComputerHand = () => {

    // Get a randomized number from 0-2 inclusive
    let n = Math.floor(Math.random() * 3);
    // console.log(compHand);

    // Return a value (a 'hand') associated with that randomized number
    switch (n) {
        case 0:
            return `rock`;
        case 1:
            return `paper`;
        case 2:
            return `scissors`;
        default:
            return null;
    }
}



// Get player choice
/*
    To-do
    - Validate inputs
*/
const getPlayerHand = () => {

    // Prompt
    const hand = prompt(`rock, paper, or scissors?`).toLowerCase();

    // Validation - this needs to be worked on
    if (hand === `rock` || hand === `paper` || hand === `scissors`) {
        return hand;
    } else {
        alert(`Please enter a valid choice`);
    }
}



// Set amount of times game played
const handsToPlay = 3;



// Initialize scores
let computerScore = 0;
let playerScore = 0;
let tie = 0;



// Set console styling
const consoleStyleLoss = `color: red;`;
const consoleStyleWin = `color: green`;
const consoleStylePerfect = `background-color: green; color: black;`;
const consoleStyleTie = `color: gold;`;
const consoleStyleContext = `color: #444; font-style: italic;`;
const consoleStyleTitle = `color: white; text-decoration: underline;`;



// Play a round
const playRound = (playerHand, computerHand) => {

    playerHand = getPlayerHand(); // Get result from computer function
    computerHand = getComputerHand(); // Get result from player function

    // Set win/loss/tie messages
    const outcomeMessageLoss = `You lose this round!`;
    const outcomeMessageWin = `You win this round!`;
    const outcomeMessageTie = `Round tied!`;

    // Log choices each round
    // console.log(`Computer chose ${computerHand}`);
    // console.log(`You chose ${playerHand}`);

    // Declare who wins round
    /*
        Notes
        - The logic here can probably be improved greatly
    */
    if (computerHand === playerHand) {
        tie++; // Increase ties by one
        return outcomeMessageTie;
    } else if (computerHand === `paper` && playerHand === `rock`) {
        computerScore++; // Increase computer score by one
        return outcomeMessageLoss;
    } else if (computerHand === `rock` && playerHand === `scissors`) {
        computerScore++; // Increase computer score by one
        return outcomeMessageLoss;
    } else if (computerHand === `scissors` && playerHand === `paper`) {
        computerScore++; // Increase computer score by one
        return outcomeMessageLoss;
    } else {
        playerScore++; // Increase player score by one
        return outcomeMessageWin;
    }
}



// Play game n rounds, log score at time of each round
const playGame = n => {

    // Log how many rounds game will be played
    console.log(`%crockPaperScissors.js`, consoleStyleTitle)
    console.info(`%cPlaying game ${n} ${(n === 1) ? 'time' : 'times'}`,
        consoleStyleContext);

    // Play though n times
    for (let i = 1; i <= n; i++) {
        console.log(`Round ${i}: ${playRound()}`);
        console.info(`%cCurrent score: ${computerScore} to ${playerScore} (${tie} ties)`, consoleStyleContext)
    }

    // Call function that logs who won the game (the set of rounds)
    gameResults();
    // resetGame();

}



// Declare winner after all rounds played
/*
    To-do
    - Clean this up, improve readability
*/
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
}



// Reset game (and scores) after p seconds
const resetGame = () => {

    // Reset scores
    computerScore = 0;
    playerScore = 0;
    tie = 0;

    const p = 6; // Amount of seconds that pass

    // Log what is happening, what will happen
    console.warn(`Resetting scores`);

    // Clear console in p seconds
    console.warn(`Clearing console in ${p} seconds`);
    setTimeout(clearConsole, (p * 1000));
}



// This clears the console
const clearConsole = () => {
    console.clear();
}