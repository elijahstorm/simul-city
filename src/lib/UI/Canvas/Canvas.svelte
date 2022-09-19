<script lang="ts">
	import { pipe } from '$lib/fp-ts'
	import { updateCars } from '$lib/Simulation/Cars/car'
	import { ControlsConfig } from '$lib/Simulation/Controls/controls'
	import { city, clean } from '$lib/Simulation/Environment/city'
	import { onMount, tick } from 'svelte'
	import { canvas, context, die, logs, config } from '$lib/stores'
	import { onDestroy } from 'svelte'
	import { lerp } from '$lib/utils'
	import { waveCollapseGenerate } from '$lib/Simulation/Road/generate'
	import { LANE_AMOUNT } from '$lib/Simulation/Road/render'
	import { camera, restore } from '$lib/Simulation/Environment/camera'
	import { removeDead } from '$lib/Simulation/Ai/death'
	import { ai } from '$lib/Simulation/Ai/run'

	export const fps = 60
	export const tpf = 1000 / fps

	const { master, controls } = config

	let canvasElement: HTMLCanvasElement
	let innerWidth: number
	let innerHeight: number

	onMount(async () => {
		canvas.set(canvasElement)
		context.set($canvas.getContext('2d') as ContextProp)

		await tick()

		die.set(false)

		loop(new Date())
	})

	const TILE_SIZE = 200
	const carWidth = (TILE_SIZE / LANE_AMOUNT) * 0.6
	const colors: Color[] = ['#0f0', '#000', '#0ff', '#f0f', '#fff']
	const emptyBox: Car = {
		box: {
			x: 100,
			y: 100,
			width: 30,
			height: 55,
			angle: 0
		},
		color: '#000',
		dead: true
	}

	let carSpots: Car[] = []
	let world: World
	let destroyed = false
	let generatedMap = waveCollapseGenerate(Number($master.gridSize))

	$: generatedMap = waveCollapseGenerate(Number($master.gridSize))
	$: world = {
		...generatedMap,
		dim: $master.gridSize,
		size: {
			width: $master.gridSize * TILE_SIZE,
			height: $master.gridSize * TILE_SIZE
		},
		backgroundSaved: false
	}
	$: carSpots = new Array($master.carAmount).fill(emptyBox).map(
		(v, i) =>
			(carSpots[i] = {
				box: {
					x: lerp(
						0,
						TILE_SIZE,
						(Math.floor(1 + Math.random() * (LANE_AMOUNT - 2)) + 0.5) / LANE_AMOUNT
					),
					y: Math.random() * TILE_SIZE,
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
				color: colors[Math.floor(Math.random() * colors.length)],
				dead: false
			})
	)

	const loop = (lastTime: Date) => {
		if (destroyed) return
		if (pipe(updateCars(carSpots)(world), removeDead(carSpots), ai).every((car) => car == null)) {
			setTimeout(
				() => master.update((master) => ({ ...master, carAmount: master.carAmount + 1 })),
				1000
			)
			return
		}
		pipe(
			$context,
			clean({ width: $canvas.width, height: $canvas.height }),
			camera(carSpots[$controls.cameraFocus]),
			city(world, carSpots[$controls.cameraFocus]?.box, carSpots),
			restore
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
</script>

<svelte:window
	on:keydown={ControlsConfig.onkeydown}
	on:keyup={ControlsConfig.onkeyup}
	bind:innerWidth
	bind:innerHeight
/>

<canvas id="background-canvas" style="display: none" />
<canvas bind:this={canvasElement} width={innerWidth} height={innerHeight} />
