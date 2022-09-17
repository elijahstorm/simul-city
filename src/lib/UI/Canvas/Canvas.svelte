<script lang="ts">
	import { pipe } from '$lib/fp-ts'
	import { car } from '$lib/Simulation/Cars/car'
	import { ControlsConfig } from '$lib/Simulation/Controls/controls'
	import { city } from '$lib/Simulation/Environment/city'
	import { onMount, afterUpdate, tick } from 'svelte'
	import { canvas, context, die, logs } from '$lib/stores'
	import { onDestroy } from 'svelte'

	export const fps = 60
	export const tpf = 1000 / fps

	let innerWidth: number
	let innerHeight: number

	onMount(() => {
		canvas.set(canvasElement)
		context.set($canvas.getContext('2d') as ContextProp)
	})

	afterUpdate(async () => {
		await tick()

		carSpots.fill(emptyBox).forEach(
			(v, i) =>
				(carSpots[i] = {
					box: {
						x: Math.random() * $canvas.width,
						y: Math.random() * $canvas.height,
						width: 30,
						height: 50,
						angle: Math.random() * Math.PI,
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
		const size: Size = {
			width: $canvas.width,
			height: $canvas.height
		}
		pipe($context, city(size), car(carSpots))
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
