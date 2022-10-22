import { base } from '$app/paths'
import { useGltf } from '@threlte/extras'
import { derived } from 'svelte/store'

const carModelName = 'Sketchfab_model'

export const taxiCar = derived(
	useGltf<string, 'Material_MR'>(
		`${base}/models/cars/2008/2008_baird_silver_coronet_taxicab/scene.gltf`
	).gltf,
	(gltf) => (!gltf || !gltf.nodes[carModelName] ? null : gltf.nodes[carModelName])
)

export const simpleCar = derived(
	useGltf<string, 'Material_MR'>(`${base}/models/.old.city/glb/car-8.gltf`).gltf,
	(gltf) => (!gltf || !gltf.nodes['car-008'] ? null : gltf.nodes['car-008'])
)
