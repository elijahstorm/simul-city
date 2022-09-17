import { writable, type Writable } from 'svelte/store'

export const canvas = writable() as Writable<HTMLCanvasElement>
export const context = writable() as Writable<ContextProp>
export const die = writable(false) as Writable<boolean>
export const logs = writable({}) as Writable<object>
