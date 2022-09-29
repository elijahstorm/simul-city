import { pipe } from '$lib/fp-ts'
import { lerp } from '$lib/utils'

export const mutate = (network: AI, amount = 1): AI => ({
	layers: adjust(network, amount)
})

const adjust = (network: AI, amount: number) =>
	network.layers.map((layer) => pipe(layer, adjustBiases(amount), adjustWeights(amount)))

const adjustBiases = (amount: number) => (layer: Layer) => {
	layer.biases = layer.biases.map((b) => lerp(b, Math.random() * 2 - 1, amount))

	return layer
}
const adjustWeights = (amount: number) => (layer: Layer) => {
	layer.weights = layer.weights.map((l) => l.map((w) => lerp(w, Math.random() * 2 - 1, amount)))

	return layer
}
