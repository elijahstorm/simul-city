type Connection = [boolean, boolean, boolean, boolean]

type Possibilities = {
	possibilities: number[]
	connections: Connection
	index: number
}

type MapGeneration = {
	map: RenderConfig[]
	borders: MapBorder
}

type MapBorder = Wall[][]
