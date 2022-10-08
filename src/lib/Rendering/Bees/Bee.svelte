<script lang="ts">
	import { Group, useFrame, type Position, type Rotation } from '@threlte/core'
	import { Float, GLTF, HTML } from '@threlte/extras'
	import { Collider } from '@threlte/rapier'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { base } from '$app/paths'
	import { useWasd } from '../Controllers/useWasd'
	import { accelerate } from '$lib/Simulation/Physics/acceleration'

	export let position: Position | undefined
	export let rotation: Rotation | undefined = undefined

	const beeBox: HitBox = {
		x: 0,
		y: 0,
		angle: 0,
		width: 10,
		height: 10
	}
	const wasd = useWasd()

	useFrame(() => {
		accelerate({
			thrust: -$wasd.y,
			breaks: 0,
			angle: $wasd.x / 100
		})(beeBox)
		position = {
			x: Math.cos(beeBox.angle) * (beeBox.physics?.momentum.magnitude ?? 0) + (position?.x ?? 0),
			z: -Math.sin(beeBox.angle) * (beeBox.physics?.momentum.magnitude ?? 0) + (position?.z ?? 0)
		}
		console.log(position)
		rotation = {
			y: beeBox.angle
		}
	})
</script>

<Group {position} {rotation}>
	<Collider mass={1} shape={'cuboid'} args={[1.25, 0.4, 0.5]} />

	<Float speed={9} rotationIntensity={0.3} floatIntensity={6}>
		<GLTF
			castShadow
			url={base + '/models/honey_pot_picnic/bee.glb'}
			rotation={{ y: -122.5 * DEG2RAD }}
		/>
	</Float>

	<slot />
	<HTML rotation={{ y: 90 * DEG2RAD }} transform position={{ x: 3 }}>
		<p class="text-xs text-black">hi anna! used WASD to fly ~</p>
	</HTML>
</Group>
