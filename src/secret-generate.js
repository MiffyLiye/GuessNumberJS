function defaultGetRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateSecretNumber(customGetRandomInt) {
    const getRandomInt = customGetRandomInt || defaultGetRandomInt;

    let secret = '';
    while (secret.length < 4) {
        const newDigit = getRandomInt(10);
        if (!secret.includes(newDigit)) {
            secret = secret + newDigit;
        }
    }

    return secret;
}

module.exports = { generateSecretNumber };