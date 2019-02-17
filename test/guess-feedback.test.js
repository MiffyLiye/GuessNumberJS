const { getGuessFeedback } = require('../src/guess-feedback');

describe('number feedback', () => {
    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'5678'}
    ${'2345'}         |   ${'6789'}
    ${'0123'}         |   ${'4567'}
    ${'4321'}         |   ${'0987'}
    `('should return 0A0B when secret number $secretNumber and guessed number $guessedNumber have no digit match in same position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('0A0B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'1678'}
    ${'1234'}         |   ${'5278'}
    ${'1234'}         |   ${'5638'}
    ${'1234'}         |   ${'5674'}
    `('should return 1A0B when secret number $secretNumber and guessed number $guessedNumber have and only have one digit match in same position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('1A0B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'1278'}
    ${'1234'}         |   ${'1638'}
    ${'1234'}         |   ${'5238'}
    ${'1234'}         |   ${'5274'}
    `('should return 2A0B when secret number $secretNumber and guessed number $guessedNumber have and only have two digit match in same position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('2A0B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'1238'}
    ${'1234'}         |   ${'5234'}
    `('should return 3A0B when secret number $secretNumber and guessed number $guessedNumber have and only have three digit match in same position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('3A0B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'1234'}
    `('should return 3A0B when secret number $secretNumber and guessed number $guessedNumber have and only have three digit match in same position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('4A0B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'5671'}
    ${'1234'}         |   ${'5628'}
    `('should return 0A1B when secret number $secretNumber and guessed number $guessedNumber have and only have one digit match in different position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('0A1B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'5612'}
    ${'1234'}         |   ${'3478'}
    `('should return 0A2B when secret number $secretNumber and guessed number $guessedNumber have and only have two digit match in different position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('0A2B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'5123'}
    ${'1234'}         |   ${'2348'}
    `('should return 0A3B when secret number $secretNumber and guessed number $guessedNumber have and only have three digit match in different position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('0A3B');
    });

    it.each`
    secretNumber    |   guessedNumber
    ${'1234'}         |   ${'4321'}
    ${'1234'}         |   ${'2143'}
    `('should return 0A4B when secret number $secretNumber and guessed number $guessedNumber have and only have four digit match in different position', ({ secretNumber, guessedNumber }) => {
        const feedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(feedback).toBe('0A4B');
    });

    it.each`
    secretNumber    |   guessedNumber   |   feedback
    ${'1234'}         |   ${'1673'}     |   ${'1A1B'}
    ${'1234'}         |   ${'1243'}     |   ${'2A2B'}
    `('should return $feedback when secret number is $secretNumber and guessed number is $guessedNumber', ({ secretNumber, guessedNumber, feedback }) => {
        const actualFeedback = getGuessFeedback(secretNumber, guessedNumber);

        expect(actualFeedback).toBe(feedback);
    });
});

describe('guess feedback exceptions', () => {
    it.each`
    secretNumber    |   guessedNumber
    ${null}         |   ${'1234'}
    ${''}           |   ${'1234'}
    ${'123'}        |   ${'1234'}
    ${'12345'}      |   ${'1234'}
    ${'abcd'}       |   ${'1234'}
    ${'12.3'}       |   ${'1234'}
    ${'1223'}       |   ${'1234'}
    ${1234}         |   ${'1234'}
    ${'1234'}       |   ${null}
    ${'1234'}       |   ${''}
    ${'1234'}       |   ${'123'}
    ${'1234'}       |   ${'12345'}
    ${'1234'}       |   ${'abcd'}
    ${'1234'}       |   ${'1223'}
    ${'1234'}       |   ${1234}
    `(`should throw when argument is invalid ($secretNumber, $guessedNumber})`, ({ secretNumber, guessedNumber }) => {
        expect(() => getGuessFeedback(secretNumber, guessedNumber)).toThrow(Error("Invalid argument"))
    });
});
