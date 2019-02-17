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

    it.each`
    secretNumber    |   sequence
    ${'1234'}       |   ${[1, 2, 3, 4]}
    ${'4321'}       |   ${[4, 3, 2, 1]}
    ${'1234'}       |   ${[1, 2, 2, 3, 4]}
    `('should generate $secretNumber when random int generator gives $sequence', ({secretNumber, sequence}) => {
        let position = 0;
        const customGenerateInt = () => {
            const digit = sequence[position];
            position += 1;
            return digit;
        };

        const actualSecretNumber = generateSecretNumber(customGenerateInt);

        expect(actualSecretNumber).toBe(secretNumber)
    })
});
