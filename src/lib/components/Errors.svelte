<script lang="ts">
	import { type Letter } from '../letter';
	const { errors }: { errors: Letter[] } = $props();
	const firstFourLetters = $derived.by(() => {
		const upToFourLetters = errors.slice(0, 4);
		return [...upToFourLetters, ...Array(4 - upToFourLetters.length).fill('_')];
	});
</script>

<div class="mx-auto flex max-w-2xl justify-center gap-4">
	{#each firstFourLetters as letter, index (index)}
		<div class="text-2xl font-bold text-red-500">{letter}</div>
	{/each}
</div>
