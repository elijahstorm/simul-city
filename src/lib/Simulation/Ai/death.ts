import { config } from '$lib/stores'
import { fitness } from './reward'

let camera = 0
let MIN_FITNESS = 600
let PLAYER_CONTROLLING = false
config.controls.subscribe(({ cameraFocus, playerControls }) => {
	PLAYER_CONTROLLING = playerControls
	camera = cameraFocus
})
config.brain.subscribe(({ minFitness }) => {
	MIN_FITNESS = minFitness
})

export const removeDead = (frameCount: number) => (cars: Car[]) => {
	cars.map((car) => killIfUnfit(car, frameCount))

	const bestActor =
		cars
			.slice()
			.map((car, i) => ({ car, i }))
			.filter((which) => !which.car.dead)
			.sort((a, b) => b.car.fitness - a.car.fitness)[0]?.i ?? 0

	if (!PLAYER_CONTROLLING && camera != null && camera != bestActor) {
		config.controls.update((crtls) => ({
			...crtls,
			cameraFocus: bestActor
		}))
	}

	return cars.filter((car) => !car.dead) as Car[]
}

const killIfUnfit = (car: Car, frameCount: number) =>
	// car.dead ? null : fitnessCheck(car, frameCount) < MIN_FITNESS ? (car.dead = true) : null
	null

const fitnessCheck = (car: Car, frameCount: number) => (car.fitness = fitness(frameCount)(car))
