function getGuessFeedback(secretNumber, guessedNumber) {
    for (let i = 0; i < 4; i++) {
        if (secretNumber[i] === guessedNumber[i]) {
            return '1A0B';
        }
    }

    return '0A0B';
}

module.exports = { getGuessFeedback };
