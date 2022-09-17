import { lerp } from '$lib/utils'
import { setup } from './generate'

const GRID_SIZE = 3

export const roads = (size: Size) => (ctx: ContextProp) => {
	ctx.fillStyle = 'yellow'
	ctx.fillRect(0, 0, size.width, size.height)

	const tileSize = {
		width: size.width / GRID_SIZE,
		height: size.height / GRID_SIZE
	}

	new Array(GRID_SIZE).fill(0).map((_, i) =>
		new Array(GRID_SIZE).fill(0).map((_, j) => {
			ctx.save()
			ctx.translate(lerp(0, size.width, i / GRID_SIZE), lerp(0, size.height, j / GRID_SIZE))
			setup()[j % 2](ctx)(tileSize)
			ctx.restore()
		})
	)

	return { ctx, size }
}
