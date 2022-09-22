import { config } from '$lib/stores'
import { checkControls } from '../Controls/controls'
import { create, prediction } from './network'

let THRUST_MAGNITUDE = 3
let BREAK_MAGNITUDE = 0.1
let ANGLE = (0.5 * Math.PI) / 180
let PLAYER_CONTROLS = false
config.controls.subscribe(({ carThrust, carTurnSpeed, carBreakStrength, playerControls }) => {
	PLAYER_CONTROLS = playerControls
	THRUST_MAGNITUDE = carThrust
	BREAK_MAGNITUDE = carBreakStrength
	ANGLE = (carTurnSpeed * Math.PI) / 180
})

export const ai = (layers: number[]) => (cars: NetworkInputs) =>
	PLAYER_CONTROLS
		? cars.map(({ car, sensor }) => ({ car, action: checkControls() }))
		: cars.map(({ car, sensor }) => ({ car, action: convert(layers, sensor) }))

const convert = (layers: number[], sensor: Ray[]): CarActions => {
	const [thrust, left, right, breaking, reverse] = prediction(
		sensor.map((s) => 1 - (s.contacts[0]?.offset ?? 1))
	)(create(layers))

	return {
		thrust: THRUST_MAGNITUDE * thrust * (reverse > 0.5 ? -1 : 1),
		angle: ANGLE * -left + ANGLE * right,
		breaks: BREAK_MAGNITUDE * breaking
	}
}
