type NetworkInputs = {
	car: Car
	sensor: Ray[]
}[]

type NetworkActions = {
	car: Car
	action: CarActions
}[]

type LayerNode = number

type Layer = {
	inputs: LayerNode[]
	outputs: LayerNode[]
	biases: LayerNode[]
	weights: LayerNode[][]
}

type AI = {
	layers: Layer[]
}
