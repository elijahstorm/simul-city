import { pipe } from '$lib/fp-ts'
import { context, controls } from '$lib/stores'
import { lerp, intersection } from '$lib/utils'
import { visable } from './collision'

let RAY_COUNT = 3
let RAY_LENGTH = 100
let RAY_SPREAD = Math.PI / 4
let ctx: ContextProp

context.update((context) => (ctx = context))

controls.subscribe(({ sensorCount, sensorLength, sensorSpread, gridSize }) => {
	RAY_COUNT = sensorCount
	RAY_LENGTH = sensorLength
	RAY_SPREAD = sensorSpread
})

export const sense =
	(walls: MapBorder) =>
	(box: HitBox): Ray[] =>
		new Array(RAY_COUNT).fill(0).map((_, i) => {
			const angle = lerp(RAY_SPREAD / 2, -RAY_SPREAD / 2, i == 0 ? 0.5 : i / RAY_COUNT) - box.angle
			const start: XYPosition = [box.x, box.y]
			const end: XYPosition = [
				box.x - Math.sin(angle) * RAY_LENGTH,
				box.y - Math.cos(angle) * RAY_LENGTH
			]
			const contacts = visable(box, walls)
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
