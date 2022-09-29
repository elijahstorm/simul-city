import { mounted } from '$lib/stores'

const BEST = 'bestNetwork'
let MOUNTED = false
mounted.subscribe((v) => (MOUNTED = v))

const save = (network: AI) => {
	if (!MOUNTED) return false
	try {
		localStorage.setItem(BEST, JSON.stringify(network))
	} catch (e) {
		return false
	}
	return true
}

const destroy = () => {
	if (!MOUNTED) return false
	try {
		localStorage.removeItem(BEST)
	} catch (e) {
		return false
	}
	return true
}

const read = (): string | null => {
	if (!MOUNTED) return null
	try {
		return localStorage.getItem(BEST)
	} catch (e) {
		return null
	}
}

export const storeLocally = (network: { ai: AI; reward: number }) => save(network.ai)

export const storeCloud = (network: { ai: AI; reward: number }) => true

export const readLocally = () => JSON.parse(read() ?? 'null') as AI | null

export const readCloud = readLocally

export const removeLocalStorage = destroy
