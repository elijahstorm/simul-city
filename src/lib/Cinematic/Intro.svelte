<script lang="ts">
	import { base } from '$app/paths'
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core'
	import { HTML } from '@threlte/extras'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import Car from '$lib/Rendering/Car/Car.svelte'
	import Ground from '$lib/Rendering/Car/Ground.svelte'
	import WorldViewer from '$lib/Rendering/Scene/WorldViewer.svelte'
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { useBot } from '$lib/Rendering/Controllers/useBot'
	import { useArrows } from '$lib/Rendering/Controllers/useArrows'
	import FlyingControls from '$lib/Rendering/Bees/FlyingControls.svelte'

	const [movement, setInputs] = useBot()

	const start = {
		up: () => setInputs.onKeyDown('ArrowUp'),
		right: () => setInputs.onKeyDown('ArrowRight'),
		down: () => setInputs.onKeyDown('ArrowDown'),
		left: () => setInputs.onKeyDown('ArrowLeft')
	} as const
	const stop = {
		up: () => setInputs.onKeyUp('ArrowUp'),
		right: () => setInputs.onKeyUp('ArrowRight'),
		down: () => setInputs.onKeyUp('ArrowDown'),
		left: () => setInputs.onKeyUp('ArrowLeft')
	} as const

	const commands = [
		{ action: start.up, delay: 5000 },
		{ action: stop.up, delay: 5000 },
		{ action: start.down, delay: 400 },
		{ action: start.right, delay: 200 },
		{ action: stop.down, delay: 400 },
		{ action: stop.right, delay: 1000 },
		{ action: start.up, delay: 0 },
		{ action: start.right, delay: 500 },
		{ action: stop.right, delay: 1000 },
		{ action: stop.up, delay: 2000 },
		{
			action: () => {
				// if (browser) goto(`${base}/3d`)
			},
			delay: 5000
		}
	]

	onMount(() =>
		commands.reduce((time, command) => {
			setTimeout(command.action, time + command.delay)
			return time + command.delay
		}, 0)
	)
</script>

<WorldViewer>
	<div slot="scene">
		<DirectionalLight position={{ y: 20, x: 8, z: -3 }} />

		<Ground />

		<FlyingControls
			position={{ y: 0.01, x: -5 }}
			rotation={{ y: 90 * DEG2RAD }}
			let:position
			let:rotation
			movement={useArrows()}
		>
			<Car {position} {rotation}>
				<PerspectiveCamera
					rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 0 * DEG2RAD }}
					position={{ y: 200, x: -0.3, z: 0.35 }}
					fov={60}
				/>
			</Car>
		</FlyingControls>

		<HTML transform position={{ y: 5, x: -60, z: 50 }} rotation={{ y: 90 * DEG2RAD }}>
			<img src={base + '/logo/logo_main.png'} alt="Simul-City logo" />
		</HTML>
		<HTML transform position={{ y: 6, x: -50, z: 0 }} rotation={{ y: -180 * DEG2RAD }}>
			<p>By</p>
			<p>Elijah Storm</p>
		</HTML>
	</div>
</WorldViewer>

<style>
	p {
		font-size: 100px;
		color: white;
		background: black;
		text-orientation: sideways;
		transform: scale(-1, 1);
		text-align: center;
	}
</style>
