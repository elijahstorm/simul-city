<script lang="ts">
	import { pipe } from '$lib/fp-ts'
	import { controlCars, sensors, updateCars } from '$lib/Simulation/Cars/car'
	import { ControlsConfig } from '$lib/Simulation/Controls/controls'
	import { city, clean } from '$lib/Simulation/Environment/city'
	import { onMount } from 'svelte'
	import { canvas, context, logs, config, mounted } from '$lib/stores'
	import { onDestroy } from 'svelte'
	import { coalesce, lerp, split } from '$lib/utils'
	import { waveCollapseGenerate } from '$lib/Simulation/Road/generate'
	import { LANE_AMOUNT } from '$lib/Simulation/Road/render'
	import { camera, restore } from '$lib/Simulation/Environment/camera'
	import { removeDead } from '$lib/Simulation/Ai/death'
	import { ai } from '$lib/Simulation/Ai/run'
	import { renderNetwork } from '$lib/Simulation/Ai/render'
	import { create } from '$lib/Simulation/Ai/network'
	import { rewardNetworks, isolateBest } from '$lib/Simulation/Ai/reward'
	import {
		readStorage,
		removeLocalStorage,
		storeCloud,
		storeLocally,
		validateIfImproved
	} from '$lib/Simulation/Ai/storage'
	import { mutate } from '$lib/Simulation/Ai/mutate'
	import { writable } from 'svelte/store'

	export let debug = false

	const { master, controls, brain } = config

	$controls.showNetwork = debug

	let canvasElement: HTMLCanvasElement
	let innerWidth: number
	let innerHeight: number

	onMount(() => {
		canvas.set(canvasElement)
		context.set($canvas.getContext('2d') as ContextProp)
		$mounted = true
		requestAnimationFrame(loop)
	})
	onDestroy(() => {
		destroyed = true
		$mounted = false
		logs.set({})
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
		brain: create([1, 1]),
		destination: [0, 0],
		color: '#000',
		dead: true,
		fitness: 0,
		performace: 0
	}

	$: {
		removeLocalStorage()
		layers = [$brain.sensorCount * 2 + 1, 4, 5]
	}

	let carSpots: Car[] = []
	let world: World
	let destroyed = false
	let generatedMap = waveCollapseGenerate(Number($master.gridSize))
	let layers = [$brain.sensorCount * 2 + 1, 6, 4, 5]
	let frameCount = 0
	let currentId = writable<number | null>(null)

	$: {
		generatedMap = waveCollapseGenerate(Number($master.gridSize))

		world = {
			...generatedMap,
			dim: $master.gridSize,
			size: {
				width: $master.gridSize * TILE_SIZE,
				height: $master.gridSize * TILE_SIZE
			},
			backgroundSaved: false
		}

		carSpots = new Array($master.carAmount).fill(emptyBox).map((v, i) => {
			const gridSize = Number($master.gridSize)
			const tileX = Math.floor(Math.random() * gridSize)
			const tileY = Math.floor(Math.random() * gridSize)

			const tile = generatedMap.map[tileX + tileY * gridSize]

			const angle = tile.rotate == 1 ? Math.PI / 2 : 0

			return {
				brain: pipe(
					readStorage(),
					coalesce(mutate, () => create(layers))
				),
				box: {
					x:
						tileX * TILE_SIZE +
						lerp(
							0,
							TILE_SIZE,
							(Math.floor(1 + Math.random() * (LANE_AMOUNT - 2)) + 0.5) / LANE_AMOUNT
						),
					y:
						tileY * TILE_SIZE +
						lerp(
							0,
							TILE_SIZE,
							(Math.floor(1 + Math.random() * (LANE_AMOUNT - 2)) + 0.5) / LANE_AMOUNT
						),
					width: carWidth,
					height: carWidth * 1.6,
					angle,
					physics: {
						momentum: {
							direction: 0,
							magnitude: 0
						},
						mass: Math.random() * 5 + 5
					}
				},
				destination: [
					TILE_SIZE * ((Math.floor(tileX + gridSize * 0.5) % gridSize) + 0.5),
					TILE_SIZE * ((Math.floor(tileY + gridSize * 0.5) % gridSize) + 0.5)
				],
				color: colors[Math.floor(Math.random() * colors.length)],
				dead: false,
				fitness: 0,
				performace: 0
			}
		})

		frameCount = 0
		$currentId = null
		if ($mounted) requestAnimationFrame(loop)
	}

	const shouldStop = (id: number) => destroyed || $currentId != id

	const loop = (time: number, last = time, id = Math.random()) => {
		if ($currentId == null) $currentId = id
		if (shouldStop(id)) return
		if (runPhysics(frameCount)) {
			finishAndRestart(frameCount)
			return
		}
		renderCamera(time)
		logs.update((logs) => ({
			...logs,
			fps: Math.round(1 / ((time - last) / 1000))
		}))
		frameCount++
		requestAnimationFrame((newFrame) => loop(newFrame, time, id))
	}

	const finishAndRestart = (frameCount: number) =>
		pipe(
			carSpots,
			rewardNetworks,
			isolateBest,
			validateIfImproved,
			split(storeLocally, storeCloud),
			(success) =>
				success.every((test) => test)
					? requestAnimationFrame(() => master.update((master) => ({ ...master })))
					: alert('error! could not save to each storage')
		)

	const runPhysics = (frameCount: number) =>
		pipe(
			carSpots,
			updateCars(world),
			removeDead,
			sensors(world.borders),
			ai,
			controlCars(world)
		).every((car) => car == null)

	const renderCamera = (time: number) =>
		pipe(
			$context,
			clean({ width: $canvas.width, height: $canvas.height }),
			camera(carSpots[$controls.cameraFocus]),
			city(world, carSpots[$controls.cameraFocus]?.box, carSpots, {
				width: $canvas.width,
				height: $canvas.height
			}),
			restore,
			renderNetwork($controls.showNetwork, time)
		)
</script>

<svelte:window
	on:keydown={ControlsConfig.onkeydown}
	on:keyup={ControlsConfig.onkeyup}
	bind:innerWidth
	bind:innerHeight
/>

<canvas id="background-canvas" style="display: none" />
<canvas bind:this={canvasElement} width={innerWidth} height={innerHeight} />
<canvas id="network-canvas" width={innerWidth / 2.5} height={innerHeight / 2.5} />

<style>
	#background-canvas {
		display: none;
	}
	#network-canvas {
		position: absolute;
		left: 0;
		bottom: 0;
		opacity: 0.85;
	}
</style>
