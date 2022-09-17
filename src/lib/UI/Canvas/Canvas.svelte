<script lang="ts">
	import { pipe } from '$lib/fp-ts'
	import { car } from '$lib/Simulation/Cars/car'
	import { ControlsConfig } from '$lib/Simulation/Controls/controls'
	import { city, clean } from '$lib/Simulation/Environment/city'
	import { onMount, tick } from 'svelte'
	import { canvas, context, die, logs, controls } from '$lib/stores'
	import { onDestroy } from 'svelte'
	import { lerp } from '$lib/utils'
	import { waveCollapseGenerate } from '$lib/Simulation/Road/generate'
	import { LANE_AMOUNT } from '$lib/Simulation/Road/render'

	export const fps = 60
	export const tpf = 1000 / fps

	let innerWidth: number
	let innerHeight: number

	onMount(async () => {
		canvas.set(canvasElement)
		context.set($canvas.getContext('2d') as ContextProp)

		await tick()

		const carWidth = (200 / LANE_AMOUNT) * 0.6

		carSpots.fill(emptyBox).forEach(
			(v, i) =>
				(carSpots[i] = {
					box: {
						x: lerp(
							0,
							$canvas.width / $controls.gridSize,
							(Math.floor(1 + Math.random() * (LANE_AMOUNT - 2)) + 0.5) / LANE_AMOUNT
						),
						y: Math.random() * $canvas.height,
						width: carWidth,
						height: carWidth * 1.7,
						angle: 0,
						// angle: Math.random() * Math.PI,
						physics: {
							momentum: {
								direction: 0,
								magnitude: 0
							},
							mass: Math.random() * 5 + 5
						}
					},
					color: colors[i]
				})
		)

		die.set(false)

		loop(new Date())
	})

	let map = waveCollapseGenerate(Number($controls.gridSize))
	$: map = waveCollapseGenerate(Number($controls.gridSize))

	const colors: Color[] = ['#0f0', '#000', '#0ff', '#f0f', '#fff']
	const carSpots: Car[] = new Array(5)
	const emptyBox: Car = {
		box: {
			x: 100,
			y: 100,
			width: 30,
			height: 55,
			angle: 0
		},
		color: '#000'
	}

	let destroyed = false
	const loop = (lastTime: Date) => {
		if (destroyed) return
		const world: World = {
			map,
			dim: $controls.gridSize,
			size: {
				width: $controls.gridSize * 100,
				height: $controls.gridSize * 100
			}
		}
		pipe(
			$context,
			clean({ width: $canvas.width, height: $canvas.height }),
			city(world),
			car(carSpots)
		)
		frameDelay((time: Date) => {
			logs.update((logs) => ({
				...logs,
				fps: Math.round(100 / (time.getTime() - lastTime.getTime())) * 10
			}))
			loop(time)
		})
	}

	onDestroy(() => {
		destroyed = true
		logs.set({})
	})

	const frameDelay = (resolve: (time: Date) => void) => setTimeout(() => resolve(new Date()), tpf)

	let canvasElement: HTMLCanvasElement
</script>

<svelte:window
	on:keydown={ControlsConfig.onkeydown}
	on:keyup={ControlsConfig.onkeyup}
	bind:innerWidth
	bind:innerHeight
/>

<canvas bind:this={canvasElement} width={innerWidth} height={innerHeight} />
