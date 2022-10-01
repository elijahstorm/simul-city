const diverganceFromCorrectAngle = (car: Car) =>
	Math.atan((car.destination[1] - car.box.y) / (car.destination[0] - car.box.x)) +
	(Math.PI / 2) * (car.box.x < car.destination[0] ? 1 : -1)

export const destinationAngleAccuracy = (car: Car) =>
	(Math.PI / (car.box.angle - diverganceFromCorrectAngle(car))) % (Math.PI * 2)

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

	ctx.save()
	ctx.translate(car.box.x, car.box.y)
	ctx.rotate(diverganceFromCorrectAngle(car))

	ctx.strokeStyle = 'red'
	ctx.beginPath()
	ctx.setLineDash([9, 3])
	ctx.moveTo(0, 0)
	ctx.lineTo(0, -100)
	ctx.stroke()

	ctx.restore()

	return ctx
}
