import { pipe } from '$lib/fp-ts'
import { lerp } from '$lib/utils'
import { declareCanvas } from '../Controls/canvas'

let backCanvas: HTMLCanvasElement
const backCanvasId = 'background-canvas'

export const roads = (world: World) => (ctx: ContextProp) => {
	if (world.backgroundSaved) {
		ctx.drawImage(backCanvas, 0, 0)
		return ctx
	}

	backCanvas = pipe(declareCanvas(backCanvasId, world.size), draw(world))

	ctx.drawImage(backCanvas, 0, 0)

	world.backgroundSaved = true

	return ctx
}

const draw = (world: World) => (props: { canvas: HTMLCanvasElement; ctx: ContextProp }) => {
	const { canvas, ctx } = props
	const { map, size, dim } = world

	ctx.fillStyle = 'green'
	ctx.fillRect(0, 0, size.width, size.height)

	const tileSize = {
		width: size.width / dim,
		height: size.height / dim
	}

	new Array(map.length).fill(0).map((_, i) => {
		ctx.save()
		ctx.translate(
			lerp(0, size.width, (i % dim) / dim) + tileSize.width / 2,
			lerp(0, size.height, Math.floor(i / dim) / dim) + tileSize.height / 2
		)
		ctx.rotate((map[i].rotate * 90 * Math.PI) / 180)
		ctx.translate(-tileSize.width / 2, -tileSize.height / 2)
		map[i].draw(ctx)(tileSize)
		ctx.restore()
	})

	return canvas
}
