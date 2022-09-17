import { pipe } from '$lib/fp-ts'
import { roads } from '../Road/road'

export const city = (world: World) => pipe(roads(world))
