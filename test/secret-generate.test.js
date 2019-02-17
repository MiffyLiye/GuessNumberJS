const {generateSecretNumber} = require('../src/secret-generate');

describe('secret generator', () => {
    it('should generate four digits', () => {
        const secretNumber = generateSecretNumber();

        expect(secretNumber).toMatch(/^\d{4}$/);
    });
});
