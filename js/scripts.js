const computerPlay = () => {


    let n = Math.floor(Math.random() * 3);
    // console.log(compHand);

    switch (n) {
        case 0:
            // console.log(`Rock`);
            return `Rock`;
            break;
        case 1:
            // console.log(`Paper`);
            return `Paper`;
            break;
        case 2:
            // console.log(`Scissors`);
            return `Scissors`;
            break;
        default:
            return `Oopsie!`;
    }
}

/*
computerPlay();
computerPlay();
computerPlay();
computerPlay();
computerPlay();
*/

