import { lerp } from '$lib/utils'

export const roads = (world: World) => (ctx: ContextProp) => {
	if (world.backgroundSaved) {
		ctx.drawImage(backCanvas, 0, 0)
		return { ctx, size: world.size }
	}

	const { map, size, dim } = world

	backCanvas = document.getElementById('background-canvas')
	backCanvas.width = world.size.width
	backCanvas.height = world.size.height
	if (backCanvas == null) {
		console.error('whoa')
		return { ctx, size }
	}
	const backCtx = (backCanvas as HTMLCanvasElement).getContext('2d')
	if (backCtx == null) {
		console.error('whoa')
		return { ctx, size }
	}

	backCtx.fillStyle = 'green'
	backCtx.fillRect(0, 0, size.width, size.height)

	const tileSize = {
		width: size.width / dim,
		height: size.height / dim
	}

	new Array(map.length).fill(0).map((_, i) => {
		backCtx.save()
		backCtx.translate(
			lerp(0, size.width, (i % dim) / dim) + tileSize.width / 2,
			lerp(0, size.height, Math.floor(i / dim) / dim) + tileSize.height / 2
		)
		backCtx.rotate((map[i].rotate * 90 * Math.PI) / 180)
		backCtx.translate(-tileSize.width / 2, -tileSize.height / 2)
		map[i].draw(backCtx)(tileSize)
		backCtx.restore()
	})

	ctx.drawImage(backCanvas, 0, 0)

	world.backgroundSaved = true

	return { ctx, size }
}

let backCanvas: HTMLCanvasElement
