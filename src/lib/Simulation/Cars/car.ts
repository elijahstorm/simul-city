import { pipe } from '$lib/fp-ts'
import { checkControls } from '../Controls/controls'
import { applyForce, worldWrap } from './movement'

export const car = (cars: Car[]) => (env: Enviornment) =>
	cars.map((car) =>
		pipe(checkControls(), applyForce(car.box), worldWrap(env.size), draw(env.ctx, car.color))
	)[0]

const draw = (ctx: ContextProp, color: Color) => (box: HitBox) => {
	ctx.save()
	ctx.translate(box.x, box.y)
	ctx.rotate(box.angle)
	ctx.beginPath()
	ctx.fillStyle = color
	ctx.fillRect(-box.width / 2, -box.height / 2, box.width, box.height)
	ctx.fillStyle = 'red'
	ctx.fillRect(-5, -box.height / 2, 10, 10)
	ctx.restore()
	return ctx
}
