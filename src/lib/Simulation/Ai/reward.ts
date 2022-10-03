import { pipe } from '$lib/fp-ts'
import { config } from '$lib/stores'
import { distanceFromDestination } from '../Sensor.ts/destination'

let totalMapSize = 100
config.master.subscribe((props) => {
	const length = props.gridSize * 200
	totalMapSize = Math.sqrt(length ** 2 + length ** 2)
})

export const rewardNetworks = (frameCount: number) => (cars: Car[]) =>
	cars.map((car) => pipe(car, reward, convert(car.brain)))

const reward = (car: Car) => -distanceFromDestination(car) / totalMapSize + car.performace

export const fitness = (frameCount: number) => (car: Car) => -(frameCount ** 2 / 300) + reward(car)

export const mapSizeFitnessScore = () => totalMapSize

const convert = (ai: AI) => (reward: number) => ({
	...ai,
	reward
})

export const isolateBest = (networks: FitnessResults[]) => {
	networks.sort((a, b) => b.reward - a.reward)

	return networks[0]
}
