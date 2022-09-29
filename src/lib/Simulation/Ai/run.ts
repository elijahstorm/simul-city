import { pipe } from '$lib/fp-ts'
import { brain, config } from '$lib/stores'
import { split } from '$lib/utils'
import { checkControls } from '../Controls/controls'
import { create, prediction, watch } from './network'
import { setNetworkToRender } from './render'

let BRAIN: AI
brain.subscribe((brain) => (BRAIN = brain))
let CAR_FOCUS = 0
let THRUST_MAGNITUDE = 3
let BREAK_MAGNITUDE = 0.1
let ANGLE = (0.5 * Math.PI) / 180
let PLAYER_CONTROLS = false
config.controls.subscribe((props) => {
	CAR_FOCUS = props.cameraFocus
	PLAYER_CONTROLS = props.playerControls
	THRUST_MAGNITUDE = props.carThrust
	BREAK_MAGNITUDE = props.carBreakStrength
	ANGLE = (props.carTurnSpeed * Math.PI) / 180
})

export const ai = (layers: number[]) => (cars: NetworkInputs) =>
	PLAYER_CONTROLS
		? cars.map(({ car }) => ({ car, action: checkControls() }))
		: cars.map(({ car, sensor }, i) => ({ car, action: convert(layers, sensor, i) }))

const convert = (layers: number[], sensor: Ray[], which: number): CarActions => {
	const [thrust, left, right, breaking, reverse] = pipe(
		sensor.map((s) => 1 - (s.contacts[0]?.offset ?? 1)),
		split(
			// prettier-ignore
			prediction(BRAIN || create(layers)),
			(input) => (which === CAR_FOCUS ? pipe(input, watch(BRAIN), setNetworkToRender) : null)
		)
	)[0]

	return {
		thrust: THRUST_MAGNITUDE * thrust * (reverse > 0.5 ? -1 : 1),
		angle: ANGLE * -left + ANGLE * right,
		breaks: BREAK_MAGNITUDE * breaking
	}
}
