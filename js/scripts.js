/**/

// Get computer choice
const computerPlay = () => {

    // Get a randomized number from 0-2 inclusive
    let n = Math.floor(Math.random() * 3);
    // console.log(compHand);

    // Return a value (a 'hand') associated with that randomized number
    switch (n) {
        case 0:
            return `rock`;
            break;
        case 1:
            return `paper`;
            break;
        case 2:
            return `scissors`;
            break;
        default:
            return null;
    }
}

const playRound = (playerSelection, computerSelection) => {

}

const testGame = iterate => {

    console.log(`Computer will chose hand ${iterate} times`);

    for (let i = 1; i <= iterate; i++) {
        console.log(`${i}: Computer chooses ${computerPlay()}`);
    }

}

testGame(5);