const sinon = require('sinon');
const {generateSecretNumber} = require('../src/secret-generate');

describe('secret generator', () => {
    it('should generate four digits', () => {
        const secretNumber = generateSecretNumber();

        expect(secretNumber).toMatch(/^\d{4}$/);
    });

    it('should generate unique digits', () => {
        const secretNumber = generateSecretNumber();

        const uniqueDigits = new Set(secretNumber.split(''));
        expect(uniqueDigits.size).toBe(secretNumber.length);
    });
});
