<script lang="ts">
	import { base } from '$app/paths'
	import { Canvas } from '@threlte/core'
	import { GLTF, HTML } from '@threlte/extras'
	import { Debug, World } from '@threlte/rapier'
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { AutoColliders } from '@threlte/rapier'
	import Bee from './Bee.svelte'

	export let controls = false
</script>

<div class="wrapper">
	<Canvas>
		<World>
			{#if controls}
				<Debug depthTest={false} depthWrite={false} />
			{/if}

			<DirectionalLight position={{ y: 20, x: 8, z: -3 }} />

			<AutoColliders shape={'cuboid'} position={{ y: -0.5 }}>
				<GLTF
					castShadow
					url={base + '/models/wheat_farm_at_sunset/scene.gltf'}
					scale={400}
					position={{ y: -300, x: -700 }}
				/>
			</AutoColliders>

			<Bee position={{ y: 5, x: 10 }}>
				<PerspectiveCamera
					rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 70 * DEG2RAD }}
					position={{ y: 5, x: 10 }}
					fov={60}
				/>
			</Bee>

			<HTML slot="fallback" transform>
				<p class="text-xs">
					It seems your browser<br />
					doesn't support WASM.<br />
					I'm sorry.
				</p>
			</HTML>
		</World>
	</Canvas>
</div>

<style>
	.wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: cornsilk;
	}
</style>
