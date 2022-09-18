export const camera = (world: World, car: Car) => (ctx: ContextProp) => {
	ctx.save()
	ctx.translate(-car.box.x, -car.box.y)
	// ctx.rotate(-car.box.angle)
	ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)
	return ctx
}

export const restore = (ctx: ContextProp) => {
	ctx.restore()
	return ctx
}
