<script lang="ts">
	import { base } from '$app/paths'
	import { derived } from 'svelte/store'
	import type { Mesh as ThreeMesh } from 'three'
	import { Mesh } from '@threlte/core'
	import { GLTF, useGltf } from '@threlte/extras'
	import { AutoColliders, RigidBody } from '@threlte/rapier'
	import { DEG2RAD } from 'three/src/math/MathUtils'

	const path = `${base}/models/city`

	const { gltf } = useGltf<'node_damagedHelmet_-6514', 'Material_MR'>(`${path}/city.gltf`)
	const helmet = derived(gltf, (gltf) => {
		if (!gltf || !gltf.nodes['node_damagedHelmet_-6514']) return
		return gltf.nodes['node_damagedHelmet_-6514'] as ThreeMesh
	})
</script>

<GLTF
	url={`${path}/city.gltf`}
	castShadow
	receiveShadow
	position={{ y: 1 }}
	scale={3}
	interactive
	on:click={() => {
		console.log('User clicked!')
	}}
/>

{#if $helmet}
	<RigidBody
		position={{ x: -2.5, y: 2, z: 2.5 }}
		rotation={{
			x: 90 * DEG2RAD
		}}
	>
		<AutoColliders shape={'convexHull'}>
			<Mesh castShadow geometry={$helmet.geometry} material={$helmet.material} />
		</AutoColliders>
	</RigidBody>

	<RigidBody
		position={{ x: 2.5, y: 2, z: 2.5 }}
		rotation={{
			x: 90 * DEG2RAD
		}}
	>
		<AutoColliders shape={'ball'}>
			<Mesh castShadow geometry={$helmet.geometry} material={$helmet.material} />
		</AutoColliders>
	</RigidBody>

	<RigidBody
		position={{ x: 2.5, y: 2, z: -2.5 }}
		rotation={{
			x: 90 * DEG2RAD
		}}
	>
		<AutoColliders shape={'cuboid'}>
			<Mesh castShadow geometry={$helmet.geometry} material={$helmet.material} />
		</AutoColliders>
	</RigidBody>

	<RigidBody
		position={{ x: 0, y: 2, z: -0 }}
		rotation={{
			x: 90 * DEG2RAD
		}}
	>
		<AutoColliders shape={'trimesh'} centerOfMass={{}}>
			<Mesh castShadow geometry={$helmet.geometry} material={$helmet.material} />
		</AutoColliders>
	</RigidBody>

	<RigidBody
		position={{ x: -2.5, y: 2, z: -2.5 }}
		rotation={{
			x: 90 * DEG2RAD
		}}
	>
		<AutoColliders shape={'capsule'}>
			<Mesh geometry={$helmet.geometry} material={$helmet.material} />
		</AutoColliders>
	</RigidBody>
{/if}
