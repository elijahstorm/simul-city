import { pipe } from '$lib/fp-ts'

const FRICTION = 0.04
const MAX_SPEED = 5

export const accelerate = (actions: CarActions) => (box: HitBox) => pipe(actions, apply(box))

const apply = (box: HitBox) => (actions: CarActions) => {
	const mass = box.physics?.mass ?? 10
	const momentum: Vector = box.physics?.momentum ?? {
		direction: 0,
		magnitude: 0
	}

	const { thrust, breaks, angle } = actions

	const acceleration = thrust / mass
	const velocity = Math.max(Math.min(momentum.magnitude + acceleration, MAX_SPEED), -MAX_SPEED)

	box.physics = {
		mass,
		momentum: {
			...momentum,
			magnitude: Math.max(Math.abs(velocity) - FRICTION - breaks, 0) * (velocity < 0 ? -1 : 1)
		}
	}
	box.angle += angle * velocity

	box.x += Math.sin(box.angle) * velocity
	box.y -= Math.cos(box.angle) * velocity

	return box
}
