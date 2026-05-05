<script lang="ts">
	const { setLetter }: { setLetter: (letter: string) => void } = $props();

	function oninput(event: Event) {
		const input = event.target as HTMLInputElement;
		const letter = input.value.substring(0, 1).toUpperCase();
		if (letter.length < 1 || letter < 'A' || letter > 'Z') {
			input.value = '';
			return;
		}
		input.value = '';
		setLetter(letter);
	}
</script>

<form>
	<label for="letter" class="sr-only">Enter a letter</label>
	<input
		class="rounded border-2 border-gray-300 p-2 text-center text-lg focus:border-gray-500 focus:outline-none"
		type="text"
		maxlength="1"
		{oninput}
	/>
</form>
