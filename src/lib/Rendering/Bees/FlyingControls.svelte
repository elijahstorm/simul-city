<script lang="ts">
	import { useFrame, type Position, type Rotation } from '@threlte/core'
	import { useArrows } from '../Controllers/useArrows'
	import { accelerate } from '$lib/Simulation/Physics/acceleration'

	let position: Position | undefined
	let rotation: Rotation | undefined = undefined

	const beeBox: HitBox = {
		x: 0,
		y: 0,
		angle: 0,
		width: 10,
		height: 10
	}
	const wasd = useArrows()

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
		rotation = {
			y: beeBox.angle
		}
	})
</script>

<slot {position} {rotation} />
