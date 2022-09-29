export const diverganceFromCorrectAngle = (car: Car) => {
	const angle =
		Math.PI / 2 + Math.atan2(car.destination[1] - car.box.y, car.destination[0] - car.box.x)

	return ((car.box.angle - angle) % (Math.PI * 2)) / (Math.PI * 2)
}

export const distanceFromDestination = (car: Car) => {
	return Math.sqrt((car.destination[0] - car.box.x) ** 2 + (car.destination[1] - car.box.y) ** 2)
}

export const drawDestinationPath = (car: Car) => (ctx: ContextProp) => {
	const [x, y] = car.destination
	ctx.fillStyle = 'purple'
	ctx.beginPath()
	ctx.arc(x, y, car.box.width / 2, 0, Math.PI * 2)
	ctx.fill()

	ctx.strokeStyle = 'purple'
	ctx.beginPath()
	ctx.setLineDash([9, 3])
	ctx.moveTo(car.box.x, car.box.y)
	ctx.lineTo(x, y)
	ctx.stroke()

	return ctx
}
