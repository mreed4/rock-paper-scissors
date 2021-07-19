const computerPlay = () => {

    let n = Math.floor(Math.random() * 3);
    // console.log(compHand);

    switch (n) {
        case 0:
            // console.log(`rock`);
            return `rock`;
            break;
        case 1:
            // console.log(`paper`);
            return `paper`;
            break;
        case 2:
            // console.log(`scissors`);
            return `scissors`;
            break;
        default:
            return `Oopsie!`;
    }
}

let userChoice = prompt(`Rock, paper, or scissors?`).toLowerCase();

const playRound = (playerSelection, computerSelection) => {

    playerSelection = userChoice;
    // console.log(playerSelection);
    computerSelection = computerPlay();

    /*
    if (computerSelection === playerSelection) {
        return `Tie!`;
    } else {
        return `Computer wins!`;
    }
    */
}


const game = () => {

    for (let i = 1; i <= 9; i++) {
        console.log(`${i}: Computer: ${computerPlay()}, Player: ${userChoice}`);

    }
}

game();