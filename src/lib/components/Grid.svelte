<script lang="ts">
	import { type PartialWords, type Letter } from '../letter';

	const {
		partialWords,
		lost,
		lastLetter
	}: { partialWords: PartialWords; lost: boolean; lastLetter: Letter | undefined } = $props();
</script>

<div
	class="grid grid-cols-[repeat(5,3rem)] place-content-center gap-x-4 gap-y-2 pl-0 sm:grid-cols-[repeat(5,4rem)] sm:pl-20"
>
	{#each partialWords as word, index (index)}
		{#each word as letter, letterIndex (letterIndex)}
			<div
				class="flex h-12 w-12 items-center justify-center rounded border-2 focus:border-gray-500 focus:outline-none {letter ===
				undefined
					? 'border-gray-300 bg-gray-100 text-gray-500'
					: letter === lastLetter
						? 'border-blue-500'
						: 'border-gray-100'}
						sm:h-16 sm:w-16"
			>
				<span class="text-xl font-bold uppercase sm:text-2xl">{letter ?? '_'}</span>
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
