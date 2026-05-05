<script lang="ts">
	import { type PartialWords } from '../letter';

	const { partialWords }: { partialWords: PartialWords } = $props();
</script>

<div class="grid grid-cols-[repeat(4,4rem)] place-content-center gap-4">
	{#each partialWords as word, index (index)}
		{#each word as letter, letterIndex (letterIndex)}
			<div
				class="flex h-16 w-16 items-center justify-center rounded border-2 border-gray-300 focus:border-gray-500 focus:outline-none"
			>
				<span class="text-2xl font-bold uppercase">{letter ?? '_'}</span>
			</div>
		{/each}
	{/each}
</div>
