export const validLetters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
] as const;
export type Letter = typeof validLetters[number];
export type MaybeLetter = Letter | undefined;
export type Word = [Letter, Letter, Letter, Letter];
export type PartialWord = [MaybeLetter, MaybeLetter, MaybeLetter, MaybeLetter];
export type Words = [Word, Word, Word, Word];
export type PartialWords = [PartialWord, PartialWord, PartialWord, PartialWord];
export type Errors = Letter[];

export function isValidLetter(letter: string): letter is Letter {
	return validLetters.includes(letter as Letter);
}
