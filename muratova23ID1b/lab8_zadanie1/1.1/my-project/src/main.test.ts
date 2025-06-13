import { mostFrequentCharacter } from './main';

describe('mostFrequentCharacter', () => {
    it('should return the most frequent character and its count', () => {
        const result = mostFrequentCharacter('aabbbcccc');
        expect(result).toEqual(['c', 4]);
    });

    it('should return an empty character and count 0 for an empty string', () => {
        const result = mostFrequentCharacter('');
        expect(result).toEqual(['', 0]);
    });

    it('should handle strings with one character', () => {
        const result = mostFrequentCharacter('aaa');
        expect(result).toEqual(['a', 3]);
    });
});
