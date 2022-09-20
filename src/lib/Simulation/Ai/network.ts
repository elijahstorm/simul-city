let ai: AI

export const create = (nodeCounts: number[]) => {
	if (ai) return ai
	const layers = new Array<Layer>()
	for (let i = 0; i < nodeCounts.length - 1; i++) {
		layers.push(layer(nodeCounts[i], nodeCounts[i + 1]))
	}
	ai = { layers }
	return { layers }
}

export const prediction = (input: number[]) => (ai: AI) => feedForward(input, ai)

const feedForward = (inputs: LayerNode[], network: AI) => {
	let outputs = feed(inputs, network.layers[0])
	for (let i = 1; i < network.layers.length; i++) {
		outputs = feed(outputs, network.layers[i])
	}
	return outputs
}

const layer = (inputCount: number, outputCount: number): Layer => {
	const inputs = new Array<LayerNode>(inputCount)
	const outputs = new Array<LayerNode>(outputCount)
	const biases = outputs.fill(0).map((_) => Math.random() * 2 - 1)
	const weights = inputs.fill(0).map((_) => outputs.map((_) => Math.random() * 2 - 1))

	return { inputs, outputs, biases, weights }
}

const feed = (inputs: LayerNode[], layer: Layer) =>
	layer.outputs.map((node, i) => {
		const out = inputs.reduce((sum, value, j) => sum + value * layer.weights[j][i], 0)
		return out + layer.biases[i] > 0 ? 1 : 0
	})

// const scale = (node: LayerNode) =>
