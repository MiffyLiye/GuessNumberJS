const { generateSecretNumber } = require('./secret-generate');
const { getGuessFeedback } = require('./guess-feedback');
const { drive } = require('./driver');

drive({
    generateSecretNumber,
    getGuessFeedback,
    customReadLine: null,
    customWrite: null,
    customTotalTurns: process.env.TOTAL_TURNS
});
