<script lang="ts">
	import { Object3DInstance, Group, type Position, type Rotation } from '@threlte/core'
	import { Collider } from '@threlte/rapier'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { taxiCar, simpleCar } from '$lib/renders'
	import FlyingControls from '../Bees/FlyingControls.svelte'
	import type { Readable } from 'svelte/store'

	export let position: Position | undefined = undefined
	export let rotation: Rotation | undefined = undefined
	export let movement: Readable<MovementController>
	export let simple = true
</script>

{#if $simpleCar && $taxiCar}
	<FlyingControls {position} {rotation} {movement} let:position let:rotation>
		<Group {position} {rotation}>
			<Collider mass={1} shape={'cuboid'} args={[1.25, 0.4, 0.5]} />

			<!-- CAR BODY OBJECT -->
			<Object3DInstance
				castShadow
				receiveShadow
				object={simple ? $simpleCar : $taxiCar}
				scale={0.005}
				rotation={{ x: -90 * DEG2RAD, z: 90 * DEG2RAD }}
				position={{ y: -0.6 }}
			/>

			<slot />
		</Group>
	</FlyingControls>
{/if}
