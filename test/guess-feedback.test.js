const { getGuessFeedback } = require('../src/guess-feedback');

describe('number feedback', () => {
    it('should return 0A0B when secret number is 1234 and guessed number is 5678', () => {
        const secretNumber = '1234';
        const guessedNumber = '5678';

        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('0A0B');
    })
});
