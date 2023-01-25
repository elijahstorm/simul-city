<script lang="ts" context="module">
	import { writable, type Readable, type Writable } from 'svelte/store'
	type CarContext = {
		speed: Writable<number>
	}

	export const useCar = () => {
		return getContext<CarContext>('threlte-car-context')
	}
</script>

<script lang="ts">
	import type { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat'
	import { Group, useFrame, type Position, type Rotation, Object3DInstance } from '@threlte/core'
	import { HTML } from '@threlte/extras'
	import { Collider, RigidBody, useRapier } from '@threlte/rapier'
	import { getContext, setContext } from 'svelte'
	import { Vector3 } from 'three'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import Axle from './Axle.svelte'
	import { onDestroy } from 'svelte'

	export let position: Position | undefined = undefined
	export let rotation: Rotation | undefined = undefined
	export let movement: Readable<MovementController>
	export let simple = true

	let parentRigidBody: RapierRigidBody

	const carContext = {
		speed: writable(0)
	}

	const { speed } = carContext

	setContext<typeof carContext>('threlte-car-context', carContext)

	const { world } = useRapier()
	const v3 = new Vector3()

	useFrame(() => {
		const s = parentRigidBody?.linvel()
		if (!s) return
		v3.set(s.x, s.y, s.z)
		carContext.speed.set(v3.length())
	})

	const initialIterations = {
		maxStabilizationIterations: world.maxStabilizationIterations,
		maxVelocityFrictionIterations: world.maxVelocityFrictionIterations,
		maxVelocityIterations: world.maxVelocityIterations
	}

	world.maxStabilizationIterations *= 100
	world.maxVelocityFrictionIterations *= 100
	world.maxVelocityIterations *= 100

	onDestroy(() => {
		world.maxStabilizationIterations = initialIterations.maxStabilizationIterations
		world.maxVelocityFrictionIterations = initialIterations.maxVelocityFrictionIterations
		world.maxVelocityIterations = initialIterations.maxVelocityIterations
	})
</script>

