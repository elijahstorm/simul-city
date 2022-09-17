import { pipe } from '$lib/fp-ts'
import { roads } from '../Road/road'

export const city = (world: World) => pipe(roads(world))

export const clean = (size: Size) => (ctx: ContextProp) => {
	ctx.clearRect(0, 0, size.width, size.height)
	return ctx
}
