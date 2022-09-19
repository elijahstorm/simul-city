import { pipe } from '$lib/fp-ts'
import { drawCars } from '../Cars/car'
import { roads } from '../Road/road'
import { drawSensors } from '../Sensor.ts/sensor'

type Direction = 0 | -1 | 1

type DisplayWrap = [Direction, Direction][]

const wrapDirections: DisplayWrap = [
	[-1, -1],
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0],
	[1, -1],
	[-1, 1],
	[1, 1]
]

export const city = (world: World, camera: HitBox, cars: Car[]) =>
	tile(
		world,
		wrapDirections.filter((direction) => {
			const { x, y } = camera
			// todo, dont render unneeded stuff
			return true
		}),
		cars
	)

const tile = (world: World, wrap: DisplayWrap, cars: Car[]) => {
	const draw = (ctx: ContextProp) =>
		pipe(
			ctx,
			roads(world),
			drawCars(cars),
			drawSensors(
				world.borders,
				cars.map((c) => c.box)
			)
		)

	return (ctx: ContextProp) => {
		wrap.forEach((dir) => {
			ctx.save()
			ctx.translate(world.size.width * dir[0], world.size.height * dir[1])
			draw(ctx)
			ctx.restore()
		})
		return draw(ctx)
	}
}

export const clean = (size: Size) => (ctx: ContextProp) => {
	ctx.clearRect(0, 0, size.width, size.height)
	return ctx
}
