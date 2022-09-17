import { pipe } from '$lib/fp-ts'
import { roads } from '../Road/road'

export const city = (size: Size) => pipe(roads(size))
