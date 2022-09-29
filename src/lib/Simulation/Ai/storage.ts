const BEST = 'bestNetwork'

const save = (network: AI) => {
	try {
		localStorage.setItem(BEST, JSON.stringify(network))
	} catch (e) {
		return false
	}
	return true
}

const destroy = () => localStorage.removeItem(BEST)

export const storeLocally = (network: { ai: AI; reward: number }) => save(network.ai)

export const storeCloud = (network: { ai: AI; reward: number }) => true
