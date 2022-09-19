import { config } from '$lib/stores'

let camera = 0
config.controls.subscribe(({ cameraFocus }) => {
	camera = cameraFocus
})

export const removeDead = (cars: Car[]) => (inputs: (Ray[] | null)[]) => {
	const rays = inputs.filter((r, i) => !cars[i].dead) as Ray[][]
	if (cars[camera].dead) {
		config.controls.update((crtls) => ({
			...crtls,
			cameraFocus: Math.max(
				cars.findIndex((c) => !c.dead),
				0
			)
		}))
	}
	return rays
}
