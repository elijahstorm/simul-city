<script lang="ts">
	import TopDownViewer from '$lib/Rendering/Scene/TopDownViewer.svelte'
	import WorldViewer from '$lib/Rendering/Scene/WorldViewer.svelte'

	let simple = false

	const view2d = () => (simple = true)
	const view3d = () => (simple = false)

	let input: SimulationInput = {}

	$: {
		// input = {}
	}
</script>

<div class="container">
	<div class="buttons">
		<button on:click={view2d}>view2d</button>
		<button on:click={view3d}>view3d</button>
	</div>

	<div class="render">
		{#if simple}
			<TopDownViewer {input} />
		{:else}
			<WorldViewer {input} />
		{/if}
	</div>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 8fr 1fr;
		grid-template-rows: 1fr 8fr 1fr;
	}

	.render {
		grid-column: 1 / 2;
		grid-row: 2;
	}

	.buttons {
		margin: auto;
		display: flex;
		grid-column: 1;
		grid-row: 1;
	}
</style>
