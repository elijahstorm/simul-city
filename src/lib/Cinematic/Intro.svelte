<script lang="ts">
	import { base } from '$app/paths'
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core'
	import { GLTF, HTML } from '@threlte/extras'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import Car from '$lib/Rendering/Car/Car.svelte'
	import Ground from '$lib/Rendering/Car/Ground.svelte'
	import WorldViewer from '$lib/Rendering/Scene/WorldViewer.svelte'
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { useBot } from '$lib/Rendering/Controllers/useBot'

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
		{ action: start.up, delay: 6000 },
		{ action: stop.up, delay: 4000 },
		{ action: start.down, delay: 400 },
		{ action: start.right, delay: 600 },
		{ action: stop.down, delay: 400 },
		{ action: stop.right, delay: 1000 },
		{ action: start.up, delay: 0 },
		{ action: start.right, delay: 500 },
		{ action: stop.right, delay: 1000 },
		{ action: stop.up, delay: 2000 },
		{
			action: () => {
				// if (browser) goto(`${base}/3d`)
				if (browser) goto(`${base}/2d`)
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

	const TILES = 3
	const TILE_SIZE = 140

	const tiles = new Array(TILES ** 2).fill({}).map((_, i) => ({
		x: (i % TILES) * TILE_SIZE - TILE_SIZE,
		z: Math.floor(i / TILES) * TILE_SIZE - 2 * TILE_SIZE - 60
	}))
</script>

<WorldViewer>
	<div slot="scene">
		<DirectionalLight position={{ y: 20, x: 8, z: -3 }} />

		{#each tiles as city}
			<GLTF
				castShadow
				receiveShadow
				url={base + '/models/city/scene.gltf'}
				scale={2}
				rotation={{ z: -0.14 * DEG2RAD, y: -1 * DEG2RAD, x: 4.8 * DEG2RAD }}
				position={{ ...city, y: -27.2 }}
			/>
			<!-- position={{ ...city }} -->
		{/each}

		<Ground />

		<Car {movement} position={{ y: 0.01, x: -5 }} rotation={{ y: 90 * DEG2RAD }}>
			<HTML rotation={{ y: -90 * DEG2RAD }} transform position={{ x: -40, y: -13 }}>
				<p class="text-xs text-black" style="padding: 2rem;">Work in Progress</p>
			</HTML>

			<PerspectiveCamera
				rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 90 * DEG2RAD }}
				position={{ y: 0.7, x: -0.3, z: 0.35 }}
				fov={60}
			/>
		</Car>

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
