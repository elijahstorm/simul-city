import { config } from '$lib/stores'
import { checkControls } from '../Controls/controls'
import { prediction } from './network'

let THRUST_MAGNITUDE = 3
let BREAK_MAGNITUDE = 0.1
let ANGLE = (0.5 * Math.PI) / 180
config.controls.subscribe(({ carThrust, carTurnSpeed, carBreakStrength }) => {
	THRUST_MAGNITUDE = carThrust
	BREAK_MAGNITUDE = carBreakStrength
	ANGLE = (carTurnSpeed * Math.PI) / 180
})

export const ai = (cars: NetworkInputs) =>
	cars.map(({ car, sensor }) => ({ car, action: checkControls() }))
// cars.map(({ car, sensor }) => ({ car, action: convert(sensor) }))

const convert = (sensor: Ray[]): CarActions => {
	const [thrust, left, right, breaking] = prediction(
		sensor.map((s) => 1 - (s.contacts[0]?.offset ?? 1))
	)

	return {
		thrust: THRUST_MAGNITUDE * thrust,
		angle: ANGLE * -left + ANGLE * right,
		breaks: BREAK_MAGNITUDE * breaking
	}
}
