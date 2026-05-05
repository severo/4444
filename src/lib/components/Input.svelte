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

<form class="flex flex-col items-center justify-center gap-2">
	<label for="letter" class="text-xl">Enter a letter</label>
	<input
		class="h-16 w-16 rounded border-2 border-gray-300 p-2 text-center text-lg uppercase focus:border-gray-500 focus:outline-none"
		type="text"
		maxlength="1"
		{oninput}
	/>
</form>
