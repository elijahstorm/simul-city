import { pipe } from '$lib/fp-ts'
import { conditional } from './render'

const possibilities = (grid: number): Connection[] =>
	// new Array(grid ** 2).fill(new Array(4).fill(true))
	new Array(grid ** 2).fill(new Array(4).fill(false))

const validate = (possibilities: Connection[]): Connection[] => possibilities

const collapse = (possibilities: Connection[]): RenderConfig[] =>
	possibilities.map((p) => conditional[p.reduce((v, c) => v + c, 0)](p))

export const waveCollapseGenerate: (grid: number) => RenderConfig[] = (grid) =>
	pipe(possibilities(grid), validate, collapse)
