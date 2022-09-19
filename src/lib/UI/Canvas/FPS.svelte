<script lang="ts">
	import { logs, controls, controlsHelpers } from '$lib/stores'

	const update = (key: string) => (e: InputEvent) => {
		$controls[key] =
			controlsHelpers[key].type == 'number' ? Number(e.target?.value) : e.target?.value
	}
</script>

<section>
	{#each Object.keys($logs) as key}
		<div>
			<p>
				{key}:
			</p>
			<p>
				{$logs[key]}
			</p>
		</div>
	{/each}
</section>

<section>
	{#each Object.keys($controls) as key}
		<div>
			<p>
				{key}:
			</p>
			<input
				value={$controls[key]}
				on:change={update(key)}
				type={controlsHelpers[key].type}
				min={controlsHelpers[key].min}
				max={controlsHelpers[key].max}
				step={controlsHelpers[key].step}
			/>
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
		max-width: calc(50% - 7rem);
	}

	section:nth-child(4) {
		left: unset;
		right: 0;
	}

	div {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		justify-content: space-between;
	}

	input {
		width: 3rem;
	}
</style>
