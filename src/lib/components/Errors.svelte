<script lang="ts">
	import { type Letter } from '../letter';
	const { errors, lastLetter }: { errors: Letter[]; lastLetter: Letter | undefined } = $props();
	const firstFourLetters = $derived.by(() => {
		const upToFourLetters = errors.slice(0, 4);
		return [...upToFourLetters, ...Array(4 - upToFourLetters.length).fill('_')];
	});
	const titles = [
		'😊 No miss',
		'🙂 Oh, no worry!',
		'😐 Still 2 jokers left...',
		'😬 Last chance',
		'😵 Game Over'
	];
</script>

<section class="flex flex-col items-center justify-center gap-2">
	<h2 class="text-2xl font-bold">
		{titles[errors.length]}
	</h2>
	<div
		class="grid grid-cols-[repeat(5,3rem)] place-content-center gap-x-4 gap-y-2 sm:grid-cols-[repeat(4,4rem)]"
	>
		{#each firstFourLetters as letter, index (index)}
			<div
				class="flex h-12 w-12 items-center justify-center rounded border-2 focus:border-gray-500 focus:outline-none {letter ===
				undefined
					? 'bg-gray-100 text-gray-500'
					: letter === lastLetter
						? 'border-red-500'
						: 'border-none'}
					sm:h-16 sm:w-16"
			>
				<span class="text-xl font-bold text-red-500 uppercase sm:text-2xl">{letter ?? '_'}</span>
			</div>
		{/each}
	</div>
</section>
