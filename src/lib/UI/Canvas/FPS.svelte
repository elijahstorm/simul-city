<script lang="ts">
	import { logs, config, controlsHelpers } from '$lib/stores'

	const { master, controls } = config

	type Key = keyof typeof controlsHelpers

	const update = (key: Key) => (e: Event) => {
		const type = controlsHelpers[key].type
		const what =
			type == 'number'
				? Number(e.target?.value)
				: type === 'checkbox'
				? e.target?.checked
				: e.target?.value
		if (controlsHelpers[key].where == 'master') {
			$master[key] = what
		} else {
			$controls[key] = what
		}
	}

	const keys: Key[] = Object.keys(controlsHelpers)
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
	{#each keys as key}
		<div>
			<p>
				{key}:
			</p>
			<input
				value={controlsHelpers[key].where == 'master' ? $master[key] : $controls[key]}
				checked={controlsHelpers[key].where == 'toggles' ? $controls[key] : null}
				on:change={update(key)}
				{...controlsHelpers[key]}
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
