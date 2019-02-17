function getGuessFeedback(secretNumber, guessedNumber) {
    let rightPositionDigitsMatchCount = 0;
    for (let i = 0; i < 4; i++) {
        if (secretNumber[i] === guessedNumber[i]) {
            rightPositionDigitsMatchCount += 1;
        }
    }

    return `${rightPositionDigitsMatchCount}A0B`;
}

module.exports = { getGuessFeedback };
