import { lerp } from '$lib/utils'

export const GRID_SIZE = 4

export const roads = (world: World) => (ctx: ContextProp) => {
	const { map, size } = world

	ctx.fillStyle = 'green'
	ctx.fillRect(0, 0, size.width, size.height)

	const tileSize = {
		width: size.width / GRID_SIZE,
		height: size.height / GRID_SIZE
	}

	new Array(map.length).fill(0).map((_, i) => {
		ctx.save()
		ctx.translate(
			lerp(0, size.width, (i % GRID_SIZE) / GRID_SIZE) + tileSize.width / 2,
			lerp(0, size.height, Math.floor(i / GRID_SIZE) / GRID_SIZE) + tileSize.height / 2
		)
		ctx.rotate((map[i].rotate * 90 * Math.PI) / 180)
		ctx.translate(-tileSize.width / 2, -tileSize.height / 2)
		map[i].draw(ctx)(tileSize)
		ctx.restore()
	})

	return { ctx, size }
}
