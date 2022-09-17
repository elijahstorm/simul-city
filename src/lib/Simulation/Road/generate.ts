import { lerp } from '$lib/utils'

const LANE_AMOUNT = 5
const LINE_WIDTH = 5
const LINE_COLOR = 'black'
const ROAD_COLOR = 'gray'
const solidLines = [0, 0]

const tiles = [
	(ctx: ContextProp) => (size: Size) => {
		ctx.fillStyle = ROAD_COLOR
		const roadStart = lerp(0, size.width, 1 / LANE_AMOUNT)
		ctx.fillRect(
			roadStart - LINE_WIDTH * 2,
			0,
			size.width - roadStart * 3 + LINE_WIDTH * 4,
			size.height
		)

		ctx.lineWidth = LINE_WIDTH
		ctx.strokeStyle = LINE_COLOR

		const lineSpace = size.height / 8
		const dashedLines = [lineSpace, lineSpace]

		new Array(LANE_AMOUNT - 2).fill(0).forEach((_, i) => {
			const x = lerp(0, size.width, (i + 1) / LANE_AMOUNT)
			ctx.beginPath()
			ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 3 ? solidLines : dashedLines)
			ctx.moveTo(x, 0)
			ctx.lineTo(x, size.height)
			ctx.stroke()
		})
	},
	(ctx: ContextProp) => (size: Size) => {
		ctx.fillStyle = 'pink'
		const roadStart = {
			x: lerp(0, size.width, 1 / LANE_AMOUNT),
			y: lerp(0, size.height, 1 / LANE_AMOUNT)
		}
		ctx.fillRect(
			roadStart.x - LINE_WIDTH * 2,
			0,
			size.width - roadStart.x * 3 + LINE_WIDTH * 4,
			size.height
		)
		ctx.fillRect(
			0,
			roadStart.y - LINE_WIDTH * 2,
			size.width,
			size.height - roadStart.y * 2 + LINE_WIDTH * 4
		)

		ctx.lineWidth = LINE_WIDTH
		ctx.strokeStyle = LINE_COLOR

		const lineSpace = size.height / 8
		const dashedLines = [lineSpace, lineSpace]

		new Array(LANE_AMOUNT - 2).fill(0).forEach((_, i) => {
			let x = lerp(0, size.width, (i + 1) / LANE_AMOUNT)
			let y = lerp(0, size.height, 1 / LANE_AMOUNT)

			ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 3 ? solidLines : dashedLines)

			ctx.beginPath()
			ctx.moveTo(x, 0)
			ctx.lineTo(x, y)
			ctx.stroke()

			ctx.beginPath()
			ctx.moveTo(x, size.height - y)
			ctx.lineTo(x, size.height)
			ctx.stroke()

			x = lerp(0, size.width, 1 / LANE_AMOUNT)
			y = lerp(0, size.height, (i + 1) / LANE_AMOUNT)

			ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 3 ? solidLines : dashedLines)

			ctx.beginPath()
			ctx.moveTo(0, y)
			ctx.lineTo(x, y)
			ctx.stroke()

			ctx.beginPath()
			ctx.moveTo(size.width - x, y)
			ctx.lineTo(size.width, y)
			ctx.stroke()
		})
	}
]

export const setup = () => tiles
