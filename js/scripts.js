const computerPlay = () => {

    let n = Math.floor(Math.random() * 3);
    // console.log(compHand);

    switch(n) {
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

for (let i = 1; i <= 10; i++) {
    console.log(`${i}: ${computerPlay()}`);
}