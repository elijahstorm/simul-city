import { writable, type Writable } from 'svelte/store'

export const canvas = writable() as Writable<HTMLCanvasElement>
export const context = writable() as Writable<ContextProp>
export const mounted = writable() as Writable<boolean>
export const logs = writable({}) as Writable<object>

export const config = {
	master: writable({
		gridSize: 35,
		carAmount: 500
	}),
	brain: writable({
		sensorCount: 5,
		sensorLength: 200,
		sensorSpread: Math.PI / 2,
		minFitness: -400
	}),
	controls: writable({
		showNetwork: true,
		cameraFocus: 0,
		playerControls: false,
		drawSensors: false,
		cameraSpeed: 0.06,
		carThrust: 2,
		maxSpeed: 8,
		carTurnSpeed: 0.5,
		carBreakStrength: 0.4,
		friction: 0.04
	})
}

export const controlsHelpers = {
	gridSize: {
		type: 'number',
		where: 'master',
		min: 2,
		max: 100,
		step: 1
	},
	carAmount: {
		type: 'number',
		where: 'master',
		min: 2,
		max: 1000,
		step: 10
	},
	cameraFocus: {
		type: 'number',
		where: 'controls',
		min: 0,
		max: 5,
		step: 1
	},
	playerControls: {
		type: 'checkbox',
		where: 'controls'
	},
	showNetwork: {
		type: 'checkbox',
		where: 'controls'
	},
	drawSensors: {
		type: 'checkbox',
		where: 'controls'
	},
	sensorCount: {
		type: 'number',
		where: 'brain',
		min: 1,
		max: 30,
		step: 1
	},
	sensorLength: {
		type: 'number',
		where: 'brain',
		min: 60,
		max: 300,
		step: 20
	},
	sensorSpread: {
		type: 'number',
		where: 'brain',
		min: 0,
		max: Math.PI,
		step: 0.3
	},
	minFitness: {
		type: 'number',
		where: 'brain',
		min: -3000,
		max: 0,
		step: 50
	},
	cameraSpeed: {
		type: 'number',
		where: 'controls',
		min: 0,
		max: 0.15,
		step: 0.001
	},
	carThrust: {
		type: 'number',
		where: 'controls',
		min: 1,
		max: 15,
		step: 1
	},
	carTurnSpeed: {
		type: 'number',
		where: 'controls',
		min: 0.3,
		max: 1.5,
		step: 0.1
	},
	carBreakStrength: {
		type: 'number',
		where: 'controls',
		min: 0.05,
		max: 0.3,
		step: 0.05
	},
	friction: {
		type: 'number',
		where: 'controls',
		min: 0.01,
		max: 1,
		step: 0.01
	},
	maxSpeed: {
		type: 'number',
		where: 'controls',
		min: 3,
		max: 20,
		step: 1
	}
}

config.master.subscribe(({ carAmount }) => {
	controlsHelpers.cameraFocus.max = carAmount - 1
})
