function getGuessFeedback(secretNumber, guessedNumber) {
    const rightPositionDigitsMatchCount = secretNumber.split('')
        .map((secretDigit, index) => secretDigit === guessedNumber[index] ? 1 : 0)
        .reduce((a, b) => a + b, 0);

    const allPositionDigitMatchCount = secretNumber.split('')
        .map((secretDigit) => guessedNumber.includes(secretDigit) ? 1 : 0)
        .reduce((a, b) => a + b, 0);

    const wrongPositionDigitMatchCount = allPositionDigitMatchCount - rightPositionDigitsMatchCount;

    return `${rightPositionDigitsMatchCount}A${wrongPositionDigitMatchCount}B`;
}

module.exports = { getGuessFeedback };
