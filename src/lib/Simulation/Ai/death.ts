import { config } from '$lib/stores'

let camera = 0
let MAX_IDLE_TIME = 600
config.controls.subscribe(({ cameraFocus }) => {
	camera = cameraFocus
})
config.brain.subscribe(({ maxIdleFrames }) => {
	MAX_IDLE_TIME = maxIdleFrames
})

export const removeDead = (cars: Car[]) => {
	cars.map((car) => killIfIdle(car))
	if (cars[camera].dead) {
		config.controls.update((crtls) => ({
			...crtls,
			cameraFocus: Math.max(
				cars.findIndex((c) => !c.dead),
				0
			)
		}))
	}
	return cars.filter((c, i) => !cars[i].dead) as Car[]
}

const killIfIdle = (car: Car) =>
	Math.abs(car.box.physics?.momentum.magnitude ?? 0) < 0.5
		? car.idleTime++ > MAX_IDLE_TIME
			? (car.dead = true)
			: null
		: (car.idleTime = 0)
