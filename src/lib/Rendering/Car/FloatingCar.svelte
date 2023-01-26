<script lang="ts">
	import { Object3DInstance, Group, type Position, type Rotation } from '@threlte/core'
	import { Collider } from '@threlte/rapier'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import FlyingControls from '../Bees/FlyingControls.svelte'
	import type { Readable } from 'svelte/store'

	export let position: Position | undefined = undefined
	export let rotation: Rotation | undefined = undefined
	export let movement: Readable<MovementController>
	export let simple = true
</script>
