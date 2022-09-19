import { writable, type Writable } from 'svelte/store'

export const canvas = writable() as Writable<HTMLCanvasElement>
export const context = writable() as Writable<ContextProp>
export const die = writable(false) as Writable<boolean>
export const logs = writable({}) as Writable<object>

export const controls = writable({
	gridSize: 5,
	carAmount: 5,
	cameraFocus: 0,
	sensorCount: 5,
	sensorLength: 100,
	sensorSpread: Math.PI / 4
})

export const controlsHelpers = {
	gridSize: {
		type: 'number',
		min: 5,
		max: 100
	},
	carAmount: {
		type: 'number',
		min: 2,
		max: 50
	},
	cameraFocus: {
		type: 'number',
		min: 0,
		max: 5
	},
	sensorCount: {
		type: 'number',
		min: 0,
		max: 30
	},
	sensorLength: {
		type: 'number',
		min: 50,
		max: 200
	},
	sensorSpread: {
		type: 'number',
		min: 0,
		max: Math.PI * 2
	}
}

controls.subscribe(({ carAmount }) => {
	controlsHelpers.cameraFocus.max = carAmount - 1
})
