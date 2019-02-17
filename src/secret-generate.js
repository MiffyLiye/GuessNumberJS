function defaultGenerateRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateSecretNumber(customGenerateRandomInt) {
    const getRandomInt = customGenerateRandomInt || defaultGenerateRandomInt;

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