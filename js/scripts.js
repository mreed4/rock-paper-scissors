/**/



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



// Initialize scores
let computerWins = 0;
let playerWins = 0;
let tie = 0;



// Set console styling
const consoleStyleLoss = `color: red;`;
const consoleStyleWin = `color: green`;
const consoleStyleContext = `color: #444; font-style: italic;`;
const consoleStylePerfect = `background-color: green; color: black;`;
const consoleStyleTie = `color: yellow;`;



// Play a round
const playRound = (playerHand, computerHand) => {

    playerHand = getPlayerHand();
    computerHand = getComputerHand();

    // Set win/loss/tie messages
    let outcomeMessageLoss = `You lose this round! [${computerHand} beats ${playerHand}]`;
    let outcomeMessageWin = `You win this round! [${playerHand} beats ${computerHand}]`;
    let outcomeMessageTie = `Tie [${playerHand} is the same as ${computerHand}]`;

    // Log choices each round
    console.log(`You chose ${playerHand}`);
    console.log(`Computer chose ${computerHand}`);

    // Declare who wins round
    if (computerHand === playerHand) {
        tie++;
        return outcomeMessageTie;
    } else if (computerHand === `paper` && playerHand === `rock`) {
        computerWins++;
        return outcomeMessageLoss;
    } else if (computerHand === `rock` && playerHand === `scissors`) {
        computerWins++;
        return outcomeMessageLoss;
    } else if (computerHand === `scissors` && playerHand === `paper`) {
        computerWins++;
        return outcomeMessageLoss;
    } else {
        playerWins++;
        return outcomeMessageWin;
    }
}



// Play game n rounds, log score at time of each iteration
const playGame = n => {

    // Log how many rounds game will be played
    console.log(`rockPaperScissors.js`)
    console.log(`%cPlaying game ${n} ${(n === 1) ? 'time' : 'times'}`, consoleStyleContext);

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
    - Clean this up
*/
const gameResults = () => {

    if (computerWins === playerWins) {
        console.log(`%cTied game! %c[${computerWins} to ${playerWins} (${tie} ties)]`, consoleStyleTie, consoleStyleContext);
    } else if (playerWins === n) {
        console.log(`%cPerfect game!`, consoleStylePerfect);
    } else if (computerWins > playerWins) {
        console.log(`%cComputer wins the game! %c[${computerWins} to ${playerWins} (${tie} ties)]`, consoleStyleLoss, consoleStyleContext);
    } else {
        console.log(`%cPlayer wins the game! %c[${playerWins} to ${computerWins} (${tie} ties)]`, consoleStyleWin, consoleStyleContext);
    }
}



// Call function

playGame(3);