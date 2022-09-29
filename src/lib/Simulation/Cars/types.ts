type Car = {
	box: HitBox
	color: Color
	dead: boolean
	destination: XYPosition
	brain: AI
}

type CarActions = {
	thrust: number
	breaks: number
	angle: number
}

type Polygon = XYPosition[]

type Obstacle = {
	borders: MapBorder
	polygons: Polygon[]
}
