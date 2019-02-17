function getGuessFeedback(secretNumber, guessedNumber) {
    const rightPositionDigitsMatchCount = secretNumber.split('')
        .map((secretDigit, index) => secretDigit === guessedNumber[index] ? 1 : 0)
        .reduce((a, b) => a + b, 0);

    return `${rightPositionDigitsMatchCount}A0B`;
}

module.exports = { getGuessFeedback };
