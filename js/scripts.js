const computerPlay = () => {

    let n = Math.floor(Math.random() * 3);
    // console.log(compHand);

    switch (n) {
        case 0:
            console.log(`rock`);
            return `rock`;
            break;
        case 1:
            console.log(`paper`);
            return `paper`;
            break;
        case 2:
            console.log(`scissors`);
            return `scissors`;
            break;
        default:
            return `Oopsie!`;
    }
}


computerPlay();
computerPlay();
computerPlay();
computerPlay();
computerPlay();



const playRound = (playerSelection, computerSelection) => {

    playerSelection = `rOCk`.toLowerCase();
    // console.log(playerSelection);

    computerSelection = computerPlay();

    if (computerSelection === playerSelection) {
        console.log(`Tie!`);
    } else {
        console.log(`Placeholder`);
    }
}

playRound();