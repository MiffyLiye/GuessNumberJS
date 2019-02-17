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

    it.skip.each`
    secretNumber    |   sequence
    ${'1234'}       |   ${[1, 2, 3, 4]}
    ${'4321'}       |   ${[4, 3, 2, 1]}
    ${'1234'}       |   ${[1, 2, 2, 3, 4]}
    `('should generate $secretNumber when random int generator gives $sequence', ({secretNumber, sequence}) => {
        const customGenerateInt = sinon.stub();
        for (let i = 0; i < sequence.length; i += 1) {
            customGenerateInt.onCall(i).returns(sequence[i]);
        }

        const actualSecretNumber = generateSecretNumber(customGenerateInt);

        expect(actualSecretNumber).toBe(secretNumber)
    })
});
