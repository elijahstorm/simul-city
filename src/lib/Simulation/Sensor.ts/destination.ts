const diverganceFromCorrectAngle = (car: Car) =>
	Math.atan((car.destination[0] - car.box.x) / (car.destination[1] - car.box.y)) -
	(car.box.y < car.destination[1] ? Math.PI : 0)

export const destinationAngleAccuracy = (car: Car) =>
	((diverganceFromCorrectAngle(car) + car.box.angle) % (Math.PI * 2)) / (Math.PI * 2)

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

	const angle = diverganceFromCorrectAngle(car)

	const start: XYPosition = [car.box.x, car.box.y]
	const end: XYPosition = [car.box.x - Math.sin(angle) * 100, car.box.y - Math.cos(angle) * 100]

	const angleMe = -car.box.angle

	const startMe: XYPosition = [car.box.x, car.box.y]
	const endMe: XYPosition = [
		car.box.x - Math.sin(angleMe) * 100,
		car.box.y - Math.cos(angleMe) * 100
	]

	ctx.strokeStyle = 'red'
	ctx.beginPath()
	ctx.setLineDash([9, 3])
	ctx.moveTo(...start)
	ctx.lineTo(...end)
	ctx.stroke()

	ctx.strokeStyle = 'green'
	ctx.beginPath()
	ctx.setLineDash([9, 3])
	ctx.moveTo(...startMe)
	ctx.lineTo(...endMe)
	ctx.stroke()

	return ctx
}
