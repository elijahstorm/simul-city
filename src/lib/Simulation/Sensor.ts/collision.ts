import { controls } from '$lib/stores'

let RAY_LENGTH = 100
let GRID_SIZE = 5

controls.subscribe(({ sensorLength, gridSize }) => {
	RAY_LENGTH = sensorLength
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

export const cull = (box: HitBox, borders: MapBorder): Wall[] => [
	...nearby([box.x, box.y], borders)
]

export const visable = (box: HitBox, borders: MapBorder): Wall[] => [
	...nearby([box.x, box.y], borders),
	...nearby(
		[box.x - Math.sin(box.angle) * RAY_LENGTH, box.y - Math.cos(box.angle) * RAY_LENGTH],
		borders
	)
]
