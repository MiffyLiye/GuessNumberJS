const prompt = require('async-prompt');
const { generateSecretNumber } = require('./secret-generate');
const { getGuessFeedback } = require('./guess-feedback');

async function drive(customReadLine, customWrite, customGenerateRandomInt) {
    const readLine = customReadLine || (() => prompt(''));
    const write = customWrite || (s => process.stdout.write(s));

    write('Welcome to guess number game!\n');
    write('You will have 6 turns.\n');

    const secretNumber = generateSecretNumber(customGenerateRandomInt);
    let winTheGame = false;

    for (let usedTurns = 0; usedTurns < 6; usedTurns += 1) {
        const guessedNumber = await readLine();
        try {
            const feedback = getGuessFeedback(secretNumber, guessedNumber);
            if (feedback === '4A0B') {
                winTheGame = true;
                break;
            } else {
                write(`${feedback}.\n`)
            }
        } catch (e) {
            if (e.message === 'Invalid argument') {
                write('Invalid argument.\n');
            } else {
                throw e;
            }
        } 
    }
    if (winTheGame) {
        write(`Congratulations! The secret number is ${secretNumber}.\n`);
    } else {
        write(`You have run out of turns! The secret number is ${secretNumber}.\n`);
    }
}

module.exports = { drive };