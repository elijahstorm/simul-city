export const ControlsConfig = {
	onkeydown: (e: KeyboardEvent) => {
		e.preventDefault()
		Controls[e.key] = Actions[e.key] || empty
	},
	onkeyup: (e: KeyboardEvent) => {
		e.preventDefault()
		delete Controls[e.key]
	}
}

export const checkControls = () => {
	const actions: CarActions = { ...nuturalStart }
	Object.keys(Controls).map((f) => Controls[f](actions))
	return actions
}

const nuturalStart: CarActions = {
	thrust: 0,
	breaks: 0,
	angle: 0
}
const THRUST_MAGNITUDE = 3
const BREAK_MAGNITUDE = 0.1
const ANGLE = (1 * Math.PI) / 180

type MovementAction = (actions: CarActions) => void

const Controls: {
	[key: string]: MovementAction
} = {}

const Actions: {
	[key: string]: MovementAction
} = {
	ArrowUp: (actions) => {
		actions.thrust = THRUST_MAGNITUDE
	},
	ArrowDown: (actions) => {
		actions.breaks = BREAK_MAGNITUDE
	},
	ArrowLeft: (actions) => {
		actions.angle = -ANGLE
	},
	ArrowRight: (actions) => {
		actions.angle = ANGLE
	}
}

const empty: MovementAction = (p) => {}
