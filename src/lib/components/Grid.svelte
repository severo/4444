<script lang="ts">
	import { type PartialWords, type Letter } from '../letter';

	const {
		partialWords,
		lost,
		lastLetter
	}: { partialWords: PartialWords; lost: boolean; lastLetter: Letter | undefined } = $props();
</script>

<div class="grid grid-cols-[repeat(5,4rem)] place-content-center gap-x-4 gap-y-2 pl-20">
	{#each partialWords as word, index (index)}
		{#each word as letter, letterIndex (letterIndex)}
			<div
				class="flex h-16 w-16 items-center justify-center rounded border-2 focus:border-gray-500 focus:outline-none {letter ===
				undefined
					? 'border-gray-300 bg-gray-100 text-gray-500'
					: letter === lastLetter
						? 'border-blue-500'
						: 'border-gray-100'}"
			>
				<span class="text-2xl font-bold uppercase">{letter ?? '_'}</span>
			</div>
		{/each}
		<div class="flex h-16 w-16 items-center justify-center">
			{#if !word.some((letter) => letter === undefined)}
				<span class="text-2xl font-bold text-green-500">✓</span>
			{:else if lost}
				<span class="text-2xl font-bold text-red-500">✗</span>
			{:else}
				<span class="text-2xl font-bold text-gray-300">✓</span>
			{/if}
		</div>
	{/each}
</div>
