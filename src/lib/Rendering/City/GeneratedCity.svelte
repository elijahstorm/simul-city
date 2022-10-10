<script lang="ts">
	import { base } from '$app/paths'
	import { waveCollapseGenerate } from '$lib/Simulation/Road/generate'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import Ground from '../Car/Ground.svelte'
	import { useGltf } from '@threlte/extras'
	import { derived } from 'svelte/store'
	import type { Mesh as ThreeMesh } from 'three'
	import { Mesh } from '@threlte/core'
	import { MeshStandardMaterial } from 'three'
	import { CylinderGeometry } from 'three'

	const roadComponents = ['road001'] as const

	type Components = typeof roadComponents[number]
	const { gltf } = useGltf<Components, 'Material_MR'>(`${base}/models/roads/roads.glb`)
	const Roads = roadComponents.map((name) =>
		derived(gltf, (gltf) => {
			if (!gltf || !gltf.nodes[name]) return
			return gltf.nodes[name] as ThreeMesh
		})
	)

	const TILES = 5
	const TILE_SIZE = 200

	const generatedMap = waveCollapseGenerate(TILES)

	const tiles = generatedMap.map.map((render, i) => ({
		geometry: new CylinderGeometry(0.3, 0.3, 0.24),
		material: new MeshStandardMaterial(),
		position: {
			x: (i % TILES) * TILE_SIZE - TILE_SIZE,
			z: Math.floor(i / TILES) * TILE_SIZE - 2 * TILE_SIZE - 60
		},
		rotation: {
			x: render.rotate * 90 * DEG2RAD
		}
	}))
</script>

{#each tiles as city}
	<Mesh castShadow receiveShadow {...city} />
{/each}

<Ground />
