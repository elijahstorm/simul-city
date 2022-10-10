<script lang="ts">
	import { base } from '$app/paths'
	import { Mesh } from '@threlte/core'
	import { GLTF } from '@threlte/extras'
	import { AutoColliders } from '@threlte/rapier'
	import { BoxGeometry, MeshStandardMaterial } from 'three'

	const TILES = 3
	const TILE_SIZE = 140

	const tiles = new Array(TILES ** 2).fill({}).map((_, i) => ({
		x: (i % TILES) * TILE_SIZE - TILE_SIZE,
		z: Math.floor(i / TILES) * TILE_SIZE - 2 * TILE_SIZE - 60
	}))
</script>

{#each tiles as city}
	<GLTF
		castShadow
		receiveShadow
		url={base + '/models/city/scene.gltf'}
		scale={2}
		position={{ ...city }}
	/>
{/each}

<AutoColliders shape={'cuboid'} position={{ y: -0.5 }}>
	<Mesh
		receiveShadow
		geometry={new BoxGeometry(1500, 1, 1500)}
		material={new MeshStandardMaterial()}
	/>
</AutoColliders>
