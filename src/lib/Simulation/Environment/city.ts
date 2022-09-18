import { roads } from '../Road/road'

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

export const city = (world: World, camera: HitBox) =>
	tile(
		world,
		wrapDirections.filter((direction) => {
			const { x, y } = camera

			return true
		})
	)

const tile = (world: World, wrap: DisplayWrap) => {
	const draw = roads(world)

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
