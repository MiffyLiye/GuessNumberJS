function isValidArgumentNumber(number) {
    if (!number) {
        return false;
    }

    if (typeof number !== 'string') {
        return false;
    }

    if (!number.match(/^\d{4}$/)) {
        return false;
    }

    const uniqueDigits = new Set(number.split(''));
    if (uniqueDigits.size !== number.length) {
        return false;
    }

    return true;
}

function getGuessFeedback(secretNumber, guessedNumber) {
    if (!isValidArgumentNumber(secretNumber) || !isValidArgumentNumber(guessedNumber)) {
        throw Error('Invalid argument');
    }

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
