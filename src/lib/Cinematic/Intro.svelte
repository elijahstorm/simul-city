<script lang="ts">
	import { base } from '$app/paths'
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core'
	import { HTML, GLTF } from '@threlte/extras'
	import { AutoColliders } from '@threlte/rapier'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import Car from '$lib/Rendering/Car/Car.svelte'
	import Ground from '$lib/Rendering/Car/Ground.svelte'
	import WorldViewer from '$lib/Rendering/Scene/WorldViewer.svelte'
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	onMount(() => {
		setTimeout(() => {
			// if (browser) goto(`${base}/3d`)
		}, 10000)
	})

	const TILES = 3
	const TILE_SIZE = 120

	const tiles = new Array(TILES ** 2).fill({}).map((_, i) => ({
		x: (i % TILES) * TILE_SIZE,
		z: (i / TILES) * TILE_SIZE - 180
	}))
</script>

<WorldViewer>
	<div slot="scene">
		<DirectionalLight position={{ y: 20, x: 8, z: -3 }} />

		<Ground />

		{#each tiles as city}
			<AutoColliders>
				<GLTF
					castShadow
					receiveShadow
					url={base + '/models/city/scene.gltf'}
					scale={2}
					rotation={{ z: -0.14 * DEG2RAD, y: -1 * DEG2RAD, x: 4.8 * DEG2RAD }}
					position={{ ...city, y: -27.2 }}
				/>
			</AutoColliders>
		{/each}

		<Car position={{ y: 0.01, x: -5 }} rotation={{ y: 90 * DEG2RAD }}>
			<PerspectiveCamera
				rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 70 * DEG2RAD }}
				position={{ y: 0.8, x: -0.25, z: 0.35 }}
				fov={60}
			/>
		</Car>

		<HTML transform position={{ y: 7, x: -80, z: 65 }} rotation={{ y: 90 * DEG2RAD }}>
			<img src={base + '/logo/logo_main.png'} alt="Simul-City logo" />
		</HTML>
		<HTML transform position={{ y: 7, x: -30, z: 0 }} rotation={{ y: -180 * DEG2RAD }}>
			<img src={base + '/logo/logo_main.png'} alt="Simul-City logo" />
			<!-- <p style="font-size: 100px">By Elijah Storm</p> -->
		</HTML>
	</div>
</WorldViewer>
