const { getGuessFeedback } = require('../src/guess-feedback');

describe('number feedback', () => {
    it('should return 0A0B when secret number is 1234 and guessed number is 5678', () => {
        const secretNumber = '1234';
        const guessedNumber = '5678';

        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('0A0B');
    })

    it('should return 1A0B when secret number is 1234 and guessed number is 1678', () => {
        const secretNumber = '1234';
        const guessedNumber = '1678';

        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('1A0B');
    })

    it('should return 1A0B when secret number is 1234 and guessed number is 5278', () => {
        const secretNumber = '1234';
        const guessedNumber = '5278';

        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('1A0B');
    })

    it('should return 1A0B when secret number is 1234 and guessed number is 5638', () => {
        const secretNumber = '1234';
        const guessedNumber = '5638';

        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('1A0B');
    })

    it('should return 1A0B when secret number is 1234 and guessed number is 5674', () => {
        const secretNumber = '1234';
        const guessedNumber = '5674';

        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('1A0B');
    })
});
