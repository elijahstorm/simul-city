import { pipe } from '$lib/fp-ts'
import { checkControls } from '../Controls/controls'
import { sense } from '../Sensor.ts/sensor'
import { applyForce, worldWrap } from './movement'

export const updateCars = (cars: Car[]) => (borders: MapBorder, size: Size) =>
	cars.map((car) => pipe(checkControls(), applyForce(car.box), worldWrap(size), sense(borders)))[0]

export const drawCars = (cars: Car[]) => (ctx: ContextProp) =>
	cars.map((car) => {
		ctx.save()
		ctx.translate(car.box.x, car.box.y)
		ctx.rotate(car.box.angle)
		ctx.beginPath()
		ctx.fillStyle = car.color
		ctx.fillRect(-car.box.width / 2, -car.box.height / 2, car.box.width, car.box.height)
		ctx.fillStyle = 'red'
		ctx.fillRect(-5, -car.box.height / 2, 10, 10)
		ctx.restore()
		return ctx
	})[0]
