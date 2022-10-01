import { pipe } from '$lib/fp-ts'
import { polygon, collide, combine } from './shape'
import { applyForce, worldWrap } from './movement'
import { sense } from '../Sensor.ts/sensor'
import { config, logs } from '$lib/stores'
import { destinationAngleAccuracy } from '../Sensor.ts/destination'
import { mapSizeFitnessScore } from '../Ai/reward'

let CAR_FOCUS = 0
config.controls.subscribe(({ drawSensors, cameraFocus }) => {
	CAR_FOCUS = cameraFocus
})

export const updateCars = (world: World) => (cars: Car[]) =>
	cars.map((car, i) =>
		car.dead
			? car
			: pipe(
					car.box,
					polygon,
					collide(combine(car, world.borders, cars)),
					kill(car),
					rewardSpeed(i == CAR_FOCUS),
					rewardAccuracy
			  )
	)

export const sensors =
	(walls: MapBorder) =>
	(cars: Car[]): NetworkInputs =>
		cars.map((car) => ({ car, sensor: pipe(car.box, sense(combine(car, walls, cars))) }))

export const controlCars = (world: World) => (actions: NetworkActions) =>
	actions.map(({ car, action }) => pipe(action, applyForce(car.box), worldWrap(world.size)))

let MIN_FITNESS = 0
config.brain.subscribe(({ minFitness }) => {
	MIN_FITNESS = minFitness
})

export const drawCars = (cars: Car[]) => (ctx: ContextProp) =>
	cars.map((car) => {
		const poly = polygon(car.box).polygon

		ctx.beginPath()
		ctx.fillStyle = car.dead ? 'red' : car.color
		poly.forEach((p, i) => (i == 0 ? ctx.moveTo(...p) : ctx.lineTo(...p)))
		ctx.fill()

		const deathBox = {
			...car.box,
			height: car.box.height * Math.max(car.fitness / MIN_FITNESS, 0)
		}
		ctx.beginPath()
		ctx.fillStyle = 'red'
		polygon(deathBox).polygon.forEach((p, i) => (i == 0 ? ctx.moveTo(...p) : ctx.lineTo(...p)))
		ctx.fill()

		ctx.beginPath()
		ctx.fillStyle = 'black'
		ctx.fillText(
			`       p:${Math.floor(car.performace)},f:${Math.floor(car.fitness)}`,
			car.box.x,
			car.box.y
		)
		ctx.fill()

		return ctx
	})[0]

const kill = (car: Car) => (crash: boolean) => {
	crash
		? (car.performace -= mapSizeFitnessScore() * Math.abs(car.box.physics?.momentum.magnitude ?? 0))
		: null
	car.dead = crash
	return car
}

const rewardSpeed = (log: boolean) => (car: Car) => {
	if (log)
		logs.update((logs) => ({
			...logs,
			angle: destinationAngleAccuracy(car),
			momen: car.box.physics?.momentum.magnitude,
			perAdd: (car.box.physics?.momentum.magnitude ?? 0) * destinationAngleAccuracy(car) - 3
		}))
	car.performace += (car.box.physics?.momentum.magnitude ?? 0) * destinationAngleAccuracy(car) - 3
	return car
}

const rewardAccuracy = (car: Car) => {
	car.performace += 0
	return car
}
