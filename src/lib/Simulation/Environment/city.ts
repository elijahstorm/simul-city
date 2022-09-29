import { pipe } from '$lib/fp-ts'
import { config, logs } from '$lib/stores'
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

export const city = (world: World, camera: HitBox, cars: Car[], dim: Size) =>
	tile(
		world,
		wrapDirections.filter((direction) => {
			const { x, y } = camera
			const { width, height } = dim
			// logs.update((logs) => ({
			// 	...logs,
			// 	x,
			// 	y,
			// 	width,
			// 	height,
			// 	worldWidth: world.size.width,
			// 	worldHeight: world.size.height,
			// 	direction
			// }))

			return true

			if (direction[1] == -1) {
				if (y < height / 2) {
					return true
				}
			} else if (direction[1] == 1) {
				if (world.size.height - y > height / 2) {
					return true
				}
			}

			if (direction[0] == -1) {
				if (x < width / 2) {
					return true
				}
			} else if (direction[0] == 1) {
				if (world.size.width - x > width / 2) {
					return true
				}
			}

			return false
		}),
		cars
	)

let DRAW_SENSORS = false
config.controls.subscribe(({ drawSensors }) => {
	DRAW_SENSORS = drawSensors
})

const tile = (world: World, wrap: DisplayWrap, cars: Car[]) => {
	const draw = (ctx: ContextProp) =>
		pipe(
			ctx,
			roads(world),
			drawCars(cars),
			DRAW_SENSORS ? drawSensors(cars, world.borders) : (c) => c
		)

	logs.update((logs) => ({
		...logs,
		amount: wrap.reduce((a, v) => a + (v ? 1 : 0), 0)
	}))

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
