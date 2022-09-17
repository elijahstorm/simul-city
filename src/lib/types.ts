type RGB = `rgb(${number}, ${number}, ${number})`
type HSL = `hsl(${number}%, ${number}%, ${number}%)`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

type Color = RGB | RGBA | HEX | HSL

type ContextProp = CanvasRenderingContext2D

type XYPosition = [number, number]

type Size = {
	width: number
	height: number
}

type Enviornment = {
	size: Size
	ctx: ContextProp
}

type CanvasProps = Size & {
	canvas: HTMLCanvasElement
	context: ContextProp
	pixelRatio: number
	time: number
}

type TileRender = (ctx: ContextProp) => (size: Size) => void
type RenderConfig = {
	draw: TileRender
	rotate: 0 | 1 | 2 | 3
}

type World = {
	map: RenderConfig[]
	size: Size
}

type HitBox = Size & {
	x: number
	y: number
	angle: number
	physics?: {
		momentum: Vector
		mass: number
	}
}

type Car = {
	box: HitBox
	color: Color
}

type Vector = {
	direction: number
	magnitude: number
}

type CarActions = {
	thrust: number
	breaks: number
	angle: number
}
