<script lang="ts">
	import { logs } from '$lib/stores'
</script>

<section>
	{#each Object.keys($logs) as key}
		<div>
			{key}: {$logs[key]}
		</div>
	{/each}
</section>

<style>
	section {
		position: absolute;
		left: 0;
		margin: 1rem 2rem;
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: rgba(255, 255, 255, 0.762);
		border-radius: 1rem;
		box-shadow: 0 2px 18px 2px rgba(0, 0, 0, 0.348);
	}
</style>
