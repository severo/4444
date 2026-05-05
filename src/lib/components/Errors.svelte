<script lang="ts">
	import { type Letter } from '../letter';
	const { errors, lastLetter }: { errors: Letter[]; lastLetter: Letter | undefined } = $props();
	const firstFourLetters = $derived.by(() => {
		const upToFourLetters = errors.slice(0, 4);
		return [...upToFourLetters, ...Array(4 - upToFourLetters.length).fill('_')];
	});
</script>

<div class="grid grid-cols-[repeat(4,4rem)] place-content-center gap-x-4 gap-y-2">
	{#each firstFourLetters as letter, index (index)}
		<div
			class="flex h-16 w-16 items-center justify-center rounded border-2 focus:border-gray-500 focus:outline-none {letter ===
			undefined
				? 'bg-gray-100 text-gray-500'
				: letter === lastLetter
					? 'border-red-500'
					: 'border-none'}"
		>
			<span class="text-2xl font-bold text-red-500 uppercase">{letter ?? '_'}</span>
		</div>
	{/each}
</div>
