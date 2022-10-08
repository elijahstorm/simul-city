<script lang="ts">
	import { base } from '$app/paths'
	import { DirectionalLight, Mesh, Object3DInstance, PerspectiveCamera } from '@threlte/core'
	import { HTML, useGltf, GLTF } from '@threlte/extras'
	import { AutoColliders, RigidBody } from '@threlte/rapier'
	import { BoxGeometry, MeshStandardMaterial } from 'three'
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

	const { gltf } = useGltf(`${base}/models/loop/loop.glb`)
</script>

<WorldViewer>
	<div slot="scene">
		<DirectionalLight position={{ y: 20, x: 8, z: -3 }} />

		<Ground />

		<AutoColliders>
			<GLTF
				castShadow
				receiveShadow
				url={base + '/models/city/scene.gltf'}
				scale={2}
				rotation={{ x: 6 * DEG2RAD, z: 0.7 * DEG2RAD, y: -3.28 * DEG2RAD }}
				position={{ y: -23, z: -180 }}
			/>a
		</AutoColliders>

		<PerspectiveCamera position={{ y: 10, x: 0, z: 120 }} />

		<Car position={{ y: 9, x: 70 }}>
			<PerspectiveCamera
				rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 70 * DEG2RAD }}
				position={{ y: 5, x: 10 }}
				fov={60}
			/>
		</Car>
	</div>
</WorldViewer>
