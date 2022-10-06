<script lang="ts">
	import { waveCollapseGenerate } from '$lib/Simulation/Road/generate'
	import { astar } from '$lib/Simulation/Road/map'

	const size = 12
	const map = waveCollapseGenerate(size)

	let gridStyle = ''
	$: gridStyle = `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr);`

	const start = Math.floor(Math.random() * size ** 2)
	const end = Math.floor(Math.random() * size ** 2)

	const borders = ['top', 'right', 'bottom', 'left']
	const direction = (dir: boolean, index: number) =>
		dir ? `border-${borders[index]}: solid 1px transparent` : ''

	const path = astar({
		map: map.connections,
		start,
		end
	})

	const currentState = (index: number) => {
		if (start === index) return 'blue'
		if (end === index) return 'green'
		if (path.includes(index)) return 'green'
		return 'grey'
	}

	const currentText = (index: number) => {
		if (start === index) return 'start'
		if (end === index) return 'end'
		if (path.includes(index)) return `${path.indexOf(index)}`
		return '_'
	}
</script>

<div class="grid" style={gridStyle}>
	{#each map.connections as tile, index}
		<p style={tile.map(direction).join('; ') + '; color: ' + currentState(index)}>
			{currentText(index)}
		</p>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		padding: 1rem;
		width: calc(100% - 2rem);
	}

	p {
		padding: 0.5rem 0.25rem;
		text-align: center;
		border: solid 1px grey;
	}
</style>
