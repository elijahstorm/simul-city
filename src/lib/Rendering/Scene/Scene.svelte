<script lang="ts">
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import Car from '$lib/Rendering/Car/Car.svelte'
	import GeneratedCity from '$lib/Rendering/City/GeneratedCity.svelte'
	import { useArrows } from '../Controllers/useArrows'
	import Engine from './Engine.svelte'

	export let input: SimulationInput
</script>

<Engine {input} />

<DirectionalLight position={{ y: 20, x: 8, z: -3 }} />

<GeneratedCity>
	<Car position={{ y: 1 }} movement={useArrows()}>
		<PerspectiveCamera
			rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD, y: 70 * DEG2RAD }}
			position={{ y: 5, x: 10 }}
			fov={60}
		/>
	</Car>
</GeneratedCity>
