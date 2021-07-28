/*
rockPaperScissors.js
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

We’re going to make a simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the Wikipedia article or this ridiculous step-by-step. For the moment we’re just going to play the game from the browser console, but we will revisit this project in a later lesson and add a Graphical User Interface with buttons and text, so don’t forget to keep the code on GitHub! You might notice some ‘Live Preview’ links in the student solutions that have a GUI - this is coming in a later lesson. When you get there don’t forget to come back and add your link!
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

    if (hand === `rock` || hand === `paper` || hand === `scissors`) {
        return hand;
    } else {
        alert(`Please enter a valid choice`);
    }
}



// Set amount of times game played
const handsToPlay = 3;



// Initialize scores
let computerWins = 0;
let playerWins = 0;
let tie = 0;



// Set console styling
const consoleStyleLoss = `color: red;`;
const consoleStyleWin = `color: green`;
const consoleStylePerfect = `background-color: green; color: black;`;
const consoleStyleTie = `color: yellow;`;
const consoleStyleContext = `color: #444; font-style: italic;`;
const consoleStyleTitle = `font-size: 1.2em; color: white; text-decoration: underline;`;



// Play a round
const playRound = (playerHand, computerHand) => {

    playerHand = getPlayerHand(); // Get result from computer function
    computerHand = getComputerHand(); // Get result form player function

    // Set win/loss/tie messages
    let outcomeMessageLoss = `You lose this round! [${computerHand} beats ${playerHand}]`;
    let outcomeMessageWin = `You win this round! [${playerHand} beats ${computerHand}]`;
    let outcomeMessageTie = `Tie [${playerHand} is the same as ${computerHand}]`;

    // Log choices each round
    console.log(`Computer chose ${computerHand}`);
    console.log(`You chose ${playerHand}`);

    // Declare who wins round
    /*
        Notes
        - The logic here can probably be improved greatly
    */
    if (computerHand === playerHand) {
        tie++; // Increase ties by one
        return outcomeMessageTie;
    } else if (computerHand === `paper` && playerHand === `rock`) {
        computerWins++; // Increase computer score by one
        return outcomeMessageLoss;
    } else if (computerHand === `rock` && playerHand === `scissors`) {
        computerWins++; // Increase computer score by one
        return outcomeMessageLoss;
    } else if (computerHand === `scissors` && playerHand === `paper`) {
        computerWins++; // Increase computer score by one
        return outcomeMessageLoss;
    } else {
        playerWins++; // Increase player score by one
        return outcomeMessageWin;
    }
}



// Play game n rounds, log score at time of each iteration
const playGame = n => {

    // Log how many rounds game will be played
    console.log(`%crockPaperScissors.js`, consoleStyleTitle)
    console.log(`%cPlaying game ${n} ${(n === 1) ? 'time' : 'times'}`, consoleStyleContext);

    // Play though n times
    for (let i = 1; i <= n; i++) {
        console.log(`Game ${i}: ${playRound()}`);
        console.log(`%cCurrent score: ${computerWins} to ${playerWins} (${tie} ties)`, consoleStyleContext)
    }

    // Call function that logs who won the game (the set of rounds)
    gameResults();

}



// Declare winner after all rounds played
/*
    To-do
    - Clean this up, improve readability
*/
const gameResults = () => {

    if (computerWins === playerWins) {
        console.log(`%cTied game! %c[${computerWins} to ${playerWins} (${tie} ties)]`, consoleStyleTie, consoleStyleContext);
    } else if (playerWins === handsToPlay) {
        console.log(`%cPerfect game!`, consoleStylePerfect);
    } else if (computerWins > playerWins) {
        console.log(`%cComputer wins the game! %c[${computerWins} to ${playerWins} (${tie} ties)]`, consoleStyleLoss, consoleStyleContext);
    } else {
        console.log(`%cPlayer wins the game! %c[${playerWins} to ${computerWins} (${tie} ties)]`, consoleStyleWin, consoleStyleContext);
    }
}



// Call function

playGame(handsToPlay); // => 3