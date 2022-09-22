import { pipe } from '$lib/fp-ts'
import { polygon, collide, combine } from './shape'
import { applyForce, worldWrap } from './movement'
import { sense } from '../Sensor.ts/sensor'

export const updateCars = (world: World) => (cars: Car[]) =>
	cars.map((car) => pipe(car.box, polygon, collide(combine(car, world.borders, cars)), kill(car)))

export const sensors =
	(walls: MapBorder) =>
	(cars: Car[]): NetworkInputs =>
		cars.map((car) => ({ car, sensor: pipe(car.box, sense(combine(car, walls, cars))) }))

export const controlCars = (world: World) => (actions: NetworkActions) =>
	actions.map(({ car, action }) => pipe(action, applyForce(car.box), worldWrap(world.size)))

export const drawCars = (cars: Car[]) => (ctx: ContextProp) =>
	cars.map((car) => {
		const poly = polygon(car.box).polygon

		ctx.beginPath()
		ctx.fillStyle = car.dead ? 'red' : car.color
		poly.forEach((p, i) => (i == 0 ? ctx.moveTo(...p) : ctx.lineTo(...p)))
		ctx.fill()

		return ctx
	})[0]

const kill = (car: Car) => (crash: boolean) => {
	car.dead = crash
	return car
}
