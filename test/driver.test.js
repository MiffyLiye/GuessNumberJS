const sinon = require('sinon');
const { getGuessFeedback } = require('../src/guess-feedback');
const driver = require('../src/driver');

describe('driver', () => {
    it('should print congratulations when guessed the secret in 6 trials', async () => {
        const generateSecretNumber = sinon.stub();
        generateSecretNumber.returns('1234');
        
        const readLine = sinon.stub();
        readLine.onCall(0).resolves('1235');
        readLine.onCall(1).resolves('1234');

        const write = sinon.spy();

        await driver.drive({
            generateSecretNumber,
            getGuessFeedback,
            customReadLine: readLine,
            customWrite: write,
            customTotalTurns: null
        });

        expect(write.getCall(0).args[0]).toBe('Welcome to guess number game!\n');
        expect(write.getCall(1).args[0]).toBe('You will have 6 turns.\n');
        expect(write.getCall(2).args[0]).toBe('3A0B.\n');
        expect(write.getCall(3).args[0]).toBe('4A0B.\n');
        expect(write.getCall(4).args[0]).toBe('Congratulations! The secret number is 1234.\n');
    });

    it('should print run out of turns when not guessed the secret in 6 trials', async () => {
        const generateSecretNumber = sinon.stub();
        generateSecretNumber.returns('1234');

        const readLine = sinon.stub();
        readLine.resolves('1235');

        const write = sinon.spy();

        await driver.drive({
            generateSecretNumber,
            getGuessFeedback,
            customReadLine: readLine,
            customWrite: write,
            customTotalTurns: null
        });

        expect(write.getCall(0).args[0]).toBe('Welcome to guess number game!\n');
        expect(write.getCall(1).args[0]).toBe('You will have 6 turns.\n');
        expect(write.getCall(2).args[0]).toBe('3A0B.\n');
        expect(write.getCall(3).args[0]).toBe('3A0B.\n');
        expect(write.getCall(4).args[0]).toBe('3A0B.\n');
        expect(write.getCall(5).args[0]).toBe('3A0B.\n');
        expect(write.getCall(6).args[0]).toBe('3A0B.\n');
        expect(write.getCall(7).args[0]).toBe('3A0B.\n');
        expect(write.getCall(8).args[0]).toBe('You have run out of turns! The secret number is 1234.\n');
    });

    it('should print error messages when input invalid guessed numbers', async () => {
        const generateSecretNumber = sinon.stub();
        generateSecretNumber.returns('1234');

        const readLine = sinon.stub();
        readLine.onCall(0).resolves('1223');
        readLine.onCall(1).resolves('123');
        readLine.onCall(2).resolves('12345');
        readLine.onCall(3).resolves('1234');

        const write = sinon.spy();

        await driver.drive({
            generateSecretNumber,
            getGuessFeedback,
            customReadLine: readLine,
            customWrite: write,
            customTotalTurns: null
        });

        expect(write.getCall(0).args[0]).toBe('Welcome to guess number game!\n');
        expect(write.getCall(1).args[0]).toBe('You will have 6 turns.\n');
        expect(write.getCall(2).args[0]).toBe('Invalid argument.\n');
        expect(write.getCall(3).args[0]).toBe('Invalid argument.\n');
        expect(write.getCall(4).args[0]).toBe('Invalid argument.\n');
        expect(write.getCall(5).args[0]).toBe('4A0B.\n');
        expect(write.getCall(6).args[0]).toBe('Congratulations! The secret number is 1234.\n');
    });
});
