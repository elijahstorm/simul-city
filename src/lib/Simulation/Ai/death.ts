import { config } from '$lib/stores'

let camera = 0
config.controls.subscribe(({ cameraFocus }) => {
	camera = cameraFocus
})

export const removeDead = (cars: Car[]) => {
	if (cars[camera].dead) {
		config.controls.update((crtls) => ({
			...crtls,
			cameraFocus: Math.max(
				cars.findIndex((c) => !c.dead),
				0
			)
		}))
	}
	return cars.filter((c, i) => !cars[i].dead) as Car[]
}
