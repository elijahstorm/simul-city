import { pipe } from '$lib/fp-ts'
import { context, controls } from '$lib/stores'
import { lerp, intersection } from '$lib/utils'

let RAY_COUNT = 3
let RAY_LENGTH = 100
let RAY_SPREAD = Math.PI / 4
let GRID_SIZE = 5
let ctx: ContextProp

context.update((context) => (ctx = context))

controls.subscribe(({ sensorCount, sensorLength, sensorSpread, gridSize }) => {
	RAY_COUNT = sensorCount
	RAY_LENGTH = sensorLength
	RAY_SPREAD = sensorSpread
	GRID_SIZE = gridSize
})

const nearby = (where: XYPosition, walls: MapBorder) => {
	const size = 200

	const tileXY = [
		Math.floor((where[0] / size + GRID_SIZE) % GRID_SIZE),
		Math.floor((where[1] / size + GRID_SIZE) % GRID_SIZE)
	]
	const tile = (tileXY[0] + tileXY[1] * GRID_SIZE) * 4

	const offset = (wall: Wall) =>
		wall.map((position) => [
			(tileXY[0] + position[0]) * size,
			(tileXY[1] + position[1]) * size
		]) as Wall

	return [...walls[tile], ...walls[tile + 1], ...walls[tile + 2], ...walls[tile + 3]].map(offset)
}

const cull = (box: HitBox, borders: MapBorder): Wall[] => [
	...nearby([box.x, box.y], borders),
	...nearby(
		[box.x - Math.sin(box.angle) * RAY_LENGTH, box.y - Math.cos(box.angle) * RAY_LENGTH],
		borders
	)
]

export const sense =
	(walls: MapBorder) =>
	(box: HitBox): Ray[] =>
		new Array(RAY_COUNT).fill(0).map((_, i) => {
			const angle =
				lerp(RAY_SPREAD / 2, -RAY_SPREAD / 2, i == 0 ? 0.5 : i / (RAY_COUNT - 1)) - box.angle
			const start: XYPosition = [box.x, box.y]
			const end: XYPosition = [
				box.x - Math.sin(angle) * RAY_LENGTH,
				box.y - Math.cos(angle) * RAY_LENGTH
			]
			const contacts = cull(box, walls)
				.map((wall) => intersection(start, end, ...wall))
				.filter((intersection) => intersection != null) as Intersection[]
			contacts.sort((a, b) => a.offset - b.offset)
			return { start, end, contacts }
		})

export const drawSensors = (walls: MapBorder, boxs: HitBox[]) => (ctx: ContextProp) =>
	boxs.map((box) => pipe(box, sense(walls), draw(ctx)))[0]

const draw = (ctx: ContextProp) => (rays: Ray[]) =>
	rays.map((ray) => {
		const end = ray.contacts[0]?.position ?? ray.end

		ctx.lineWidth = 2
		ctx.strokeStyle = 'yellow'
		ctx.beginPath()
		ctx.moveTo(...ray.start)
		ctx.lineTo(...end)
		ctx.stroke()

		ctx.strokeStyle = 'black'
		ctx.beginPath()
		ctx.moveTo(...ray.end)
		ctx.lineTo(...end)
		ctx.stroke()

		return ctx
	})[0]
