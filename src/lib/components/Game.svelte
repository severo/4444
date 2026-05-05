<script lang="ts">
	import { isValidLetter, type Letter } from '../letter';
	import { checkWords } from '../solution';
	import Grid from './Grid.svelte';
	import Errors from './Errors.svelte';
	import Input from './Input.svelte';

	const guesses: Letter[] = $state([]);
	const { partialWords, errors, lost } = $derived(checkWords(guesses));
	const lastLetter = $derived(guesses[guesses.length - 1]);

	function setLetter(letter: string) {
		if (!isValidLetter(letter)) {
			return;
		}
		console.log('Letter entered:', letter);
		guesses.push(letter);
	}
</script>

<h1 class="text-4xl font-bold">4444</h1>

<p class="mt-4 text-lg">4 words to guess. 4 letters. Up to 4 misses.</p>

<div class="mt-4 flex flex-col justify-center gap-8">
	<Grid {partialWords} {lost} {lastLetter} />

	<Errors {errors} {lastLetter} />

	<Input {setLetter} />
</div>
