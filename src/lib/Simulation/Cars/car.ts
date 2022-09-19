import { pipe } from '$lib/fp-ts'
import { polygon, collide } from './shape'
import { checkControls } from '../Controls/controls'
import { sense } from '../Sensor.ts/sensor'
import { applyForce, worldWrap } from './movement'

export const updateCars = (cars: Car[]) => (world: World) =>
	cars.map((car) =>
		pipe(
			checkControls(),
			applyForce(car.box),
			worldWrap(world.size),
			polygon,
			collide(world.borders),
			sense(world.borders)
		)
	)[0]

export const drawCars = (cars: Car[]) => (ctx: ContextProp) =>
	cars.map((car) => {
		const poly = polygon(car.box).polygon

		ctx.beginPath()
		ctx.fillStyle = car.color
		poly.forEach((p, i) => (i == 0 ? ctx.moveTo(...p) : ctx.lineTo(...p)))
		ctx.fill()

		return ctx
	})[0]
