import { type Letter, type PartialWord, type PartialWords, type Word, type Words } from './letter';

const solution: Words = [
    ['W', 'O', 'R', 'D'],
    ['T', 'E', 'S', 'T'],
    ['G', 'A', 'M', 'E'],
    ['P', 'L', 'A', 'Y']
] as const;
const solutionLetters = new Set<Letter>(solution.flatMap((word) => word));

export function checkWords(guesses: Letter[]): {
    errors: Letter[]
    partialWords: PartialWords
    lost: boolean
} {
    const errors = [...new Set(guesses)].filter((letter) => !solutionLetters.has(letter));
    const partialWords: PartialWords = [
        checkWord(solution[0], guesses),
        checkWord(solution[1], guesses),
        checkWord(solution[2], guesses),
        checkWord(solution[3], guesses)
    ]
    return {
        errors,
        partialWords,
        lost: errors.length >= 4
    }
    
}

function checkWord(word: Word, guesses: Letter[]): PartialWord {
    return [
        guesses.includes(word[0]) ? word[0] : undefined,
        guesses.includes(word[1]) ? word[1] : undefined,
        guesses.includes(word[2]) ? word[2] : undefined,
        guesses.includes(word[3]) ? word[3] : undefined
    ]
}
