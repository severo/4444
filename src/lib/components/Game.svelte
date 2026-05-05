<script lang="ts">
	import { isValidLetter, type Letter } from '../letter';
	import { checkWords } from '../solution';
	import Grid from './Grid.svelte';
	import Errors from './Errors.svelte';
	import Input from './Input.svelte';

	const guesses: Letter[] = $state([]);
	const { partialWords, errors } = $derived(checkWords(guesses));

	function setLetter(letter: string) {
		if (!isValidLetter(letter)) {
			return;
		}
		if (guesses.includes(letter)) {
			return;
		}
		console.log('Letter entered:', letter);
		guesses.push(letter);
	}
</script>

<h1 class="text-4xl font-bold">4444</h1>

<p class="mt-4 text-lg">
	Guess four 4-letter words, one letter at a time. You cannot fail more than 4 times.
</p>

<div class="mt-4 flex flex-col justify-center gap-8">
	<Grid {partialWords} />

	<Errors {errors} />

	<Input {setLetter} />
</div>
