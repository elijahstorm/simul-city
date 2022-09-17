export const initate = (index: number): Possibilities => ({
	connections: ConnectionReference[0].slice() as Connection,
	possibilities: new Array(ConnectionReference.length).fill(0).map((_, i) => i),
	index
})

const ConnectionReference: Connection[] = [
	[false, false, false, false],
	[true, true, true, true],

	[true, false, true, false],
	[false, true, false, true],
	[true, true, false, false],
	[false, false, true, true],

	[true, true, true, false],
	[true, true, false, true],
	[true, false, true, true],
	[false, true, true, true]
]

const EntropyReduction = [
	(grid: number, possibilities: Possibilities[], tile: number, value: boolean) => {
		const top = (tile - grid + possibilities.length) % possibilities.length

		possibilities[top].connections[2] = value
		possibilities[top].possibilities = possibilities[top].possibilities.filter(
			(x) => ConnectionReference[x][2] === value
		)
	},
	(grid: number, possibilities: Possibilities[], tile: number, value: boolean) => {
		let right = (tile + 1) % possibilities.length
		right =
			Math.abs((right % grid) - (tile % grid)) > 1
				? (right - grid + possibilities.length) % possibilities.length
				: right

		possibilities[right].connections[3] = value
		possibilities[right].possibilities = possibilities[right].possibilities.filter(
			(x) => ConnectionReference[x][3] === value
		)
	},
	(grid: number, possibilities: Possibilities[], tile: number, value: boolean) => {
		const bottom = (tile + grid) % possibilities.length

		possibilities[bottom].connections[0] = value
		possibilities[bottom].possibilities = possibilities[bottom].possibilities.filter(
			(x) => ConnectionReference[x][0] === value
		)
	},
	(grid: number, possibilities: Possibilities[], tile: number, value: boolean) => {
		let left = (tile - 1 + possibilities.length) % possibilities.length
		left = Math.abs((left % grid) - (tile % grid)) > 1 ? (left + grid) % possibilities.length : left

		possibilities[left].connections[1] = value
		possibilities[left].possibilities = possibilities[left].possibilities.filter(
			(x) => ConnectionReference[x][1] === value
		)
	}
]

export const collapse = (grid: number, possibilities: Possibilities[], collapse: Possibilities) => {
	const connections: Connection =
		ConnectionReference[
			collapse.possibilities[Math.floor(Math.random() * collapse.possibilities.length)]
		]

	connections.forEach((v, i) => EntropyReduction[i](grid, possibilities, collapse.index, v))

	collapse.connections = connections
	collapse.possibilities = []
}
