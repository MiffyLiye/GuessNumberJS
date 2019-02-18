const prompt = require('async-prompt');

async function drive({
    generateSecretNumber,
    getGuessFeedback,
    customReadLine,
    customWrite,
    customTotalTurns }) {
    const readLine = customReadLine || (() => prompt(''));
    const write = customWrite || (s => process.stdout.write(s));
    const totalTurns = customTotalTurns || 6;

    write('Welcome to guess number game!\n');
    write(`You will have ${totalTurns} turns.\n`);

    const secretNumber = generateSecretNumber();
    let winTheGame = false;

    for (let usedTurns = 0; usedTurns < totalTurns; usedTurns += 1) {
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
