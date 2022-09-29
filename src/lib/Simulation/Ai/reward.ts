import { pipe } from '$lib/fp-ts'
import { distanceFromDestination } from '../Sensor.ts/destination'

export const rewardNetworks = (cars: Car[]) =>
	cars.map((car) => pipe(car, reward, convert(car.brain)))

const reward = (car: Car) => distanceFromDestination(car)

const convert = (ai: AI) => (reward: number) => ({
	ai,
	reward
})

export const saveBest = (networks: { ai: AI; reward: number }[]) => {
	networks.sort((a, b) => a.reward - b.reward)

	return networks[0]
}
